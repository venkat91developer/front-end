import * as devEnv from "./environment.dev";
import * as prodEnv from "./environment.prod";

let mode = "Development";
let globalEnvironmentVariable;

if (mode == "Development" ){
  globalEnvironmentVariable = devEnv.environment
} else if (mode == "Production") {
  globalEnvironmentVariable = prodEnv.environment
}

export const environment = {
  mode: globalEnvironmentVariable?.mode,
  production: globalEnvironmentVariable?.production,
  BASE_URL:globalEnvironmentVariable?.BASE_URL,
}