import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";

const spotifyKey = import.meta.env.VITE_SPOTIFY_KEY;
const spotifySecret = import.meta.env.VITE_SPOTIFY_SECRET;

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    // Get API access token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${spotifyKey}&client_secret=${spotifySecret}`,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  const search = async () => {
    console.log("searching for " + input);
    // GET request using search to get Artist ID
    var artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    var artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=artist`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

      console.log(artistId)
    // GET request with Artist ID grab all albums from that artist
      var returnedAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, artistParams).then(response => response.json()).then(data => setAlbums(data.items))
    // display artists
  };

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            onClick={() => {
              search();
            }}
          ></Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {
            albums.map((album) => (
          <Card>
            <Card.Img src={album.images[0].url} />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
            </Card.Body>
          </Card>

            ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
