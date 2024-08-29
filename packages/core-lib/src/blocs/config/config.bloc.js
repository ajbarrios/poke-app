import { BaseBloc } from "../base.bloc";

/**
 * @typedef {Object} ConfigBlocState
 * @property {import('./config.model').ConfigType} config
 */
class ConfigBloc extends BaseBloc {
  /**
   * Método para cargar la configuración desde un fichero JSON.
   *
   * @returns {Promise<void>}
   */
  async loadConfig() {
    try {
      // Usa fetch para cargar el archivo JSON
      const response = await fetch("/config.json");
      if (!response.ok) {
        throw new Error(`Failed to load config: ${response.statusText}`);
      }
      const config = await response.json();

      // Actualizar el estado del bloc con la configuración cargada
      this.setState({ config });

      console.log("Configuración cargada con éxito:", config);
    } catch (error) {
      console.error("Error cargando la configuración:", error);
    }
  }

  constructor() {
    super("poke_config_state");
  }

  /**
   * @returns {ConfigBloc}
   */
  static _getInstance() {
    return new ConfigBloc();
  }
}

export const configBloc = ConfigBloc._getInstance();
