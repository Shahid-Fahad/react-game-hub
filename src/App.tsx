import { useEffect, useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";
interface Prop {
  id: number;
  name: string;
}
function App() {
  const [User, SetUser] = useState<Prop[]>([]);

  useEffect(() => {
    axios
      .get<Prop[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => SetUser(res.data));
  });

  return (
    <Grid
      templateAreas={{
        base : `"nav" "main"`,
        lg : `"nav nav" "aside main"`
      }}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"nav"} bg="coral">Nav</GridItem>
      <Show above="lg">
      <GridItem area={"aside"} bg="blue">Aside</GridItem>
      </Show>
      <GridItem area={"main"} bg="green">Main</GridItem>

    </Grid>
  );
}

export default App;
