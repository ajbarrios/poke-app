import axios from "axios";
import { BaseBloc } from "../base.bloc";
import { Config, ConfigType } from "./config.model";

export type ConfigBlocState = {
  config: ConfigType;
};

class ConfigBloc extends BaseBloc<ConfigBlocState> {
  async loadConfig(): Promise<void> {
    try {
      const response = await axios.get("/config.json");
      if (!response.data) {
        throw new Error(`Failed to load config: ${response.statusText}`);
      }
      const data = await response.data;

      const config = new Config({
        apiBaseUrl: data.apiBaseUrl,
        apiKey: data.apiKey,
      });

      this.setState({ config });
    } catch (error) {
      console.error("Error cargando la configuración:", error);
    }
  }

  get config(): ConfigType {
    return this.state.config;
  }

  constructor() {
    super("poke_config_state");
  }

  static _getInstance(): ConfigBloc {
    return new ConfigBloc();
  }
}

export const configBloc = ConfigBloc._getInstance();
