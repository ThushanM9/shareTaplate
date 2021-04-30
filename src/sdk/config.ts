export let ENV: EnvConfig = {
  tenantId: "",
  token: "",
  basePath: "http://132.145.228.83",
};

export interface EnvConfig {
  tenantId: string;
  token: string;
  basePath: string;
}
