const getAPokemon = require("poke-mixin");

async function seePokemon() {
  try {
    let data = await getAPokemon("ditto");
    console.log(data);
  } catch (error) {
    console.log("Error on the package: ", error);
  }
}
seePokemon();
