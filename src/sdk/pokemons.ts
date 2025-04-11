import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { parseUrlParam } from "../lib/url";
import * as models from "../models";
import { Paginated } from "../types/operations";

export class Pokemons extends ClientSDK {
  private readonly options$: SDKOptions;

  constructor(options: SDKOptions = {}) {
    super({
      client: options.httpClient || new HTTPClient(),
      baseURL: serverURLFromOptions(options),
    });

    this.options$ = options;
    void this.options$;
  }

  /**
   * Get one Pokémon.
   *
   * @remarks
   * Retrieves a single Pokémon by ID or name.
   */
  async findOne(
    idOrName: string | number,
    options?: RequestOptions
  ): Promise<models.GetPokemonResponse> {
    const input: models.GetPokemonRequest = {
      idOrName: idOrName,
    };
    const headers = new Headers();
    headers.set("user-agent", SDK_METADATA.userAgent);
    headers.set("Accept", "application/json");

    const payload = models.GetPokemonRequest$.outboundSchema.parse(input);
    const body = null;

    const path = this.templateURLComponent(`/pokemon/${payload.idOrName}`)();

    const security =
      typeof this.options$.security === "function"
        ? await this.options$.security()
        : this.options$.security;
    const securitySettings = this.resolveGlobalSecurity(security);

    const response = await this.fetch$(
      {
        security: securitySettings,
        method: "get",
        path,
        headers,
        query: "",
        body,
      },
      options
    );

    const responseFields = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result = models.GetPokemonsResponse$.inboundSchema.parse({
        ...responseFields,
        classes: responseBody,
      });
      return result;
    } else if (this.matchResponse(response, "5XX", "application/json")) {
      const responseBody = await response.json();
      const result = models.APIError$.inboundSchema.parse({
        ...responseFields,
        ...responseBody,
      });
      throw new models.APIError(result);
    } else if (this.matchResponse(response, "4XX", "*")) {
      const responseBody = await response.text();
      const result = models.APIError$.inboundSchema.parse({
        code: `${response.status}`,
        message: responseBody,
      });

      throw new models.APIError(result);
    } else if (this.matchResponse(response, "default", "application/json")) {
      const responseBody = await response.json();
      const result = models.GetPokemonsResponse$.inboundSchema.parse({
        ...responseFields,
        Error: responseBody,
      });
      return result;
    } else {
      const responseBody = await response.text();
      throw new models.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }

  /**
   * Get a list of Pokémon.
   *
   * @remarks
   * Returns a single page of Pokémon results. Use the `next()` method on the result to fetch the next page.
   */
  async findAll(
    params: { limit: number; offset?: number },
    options?: RequestOptions
  ): Promise<Paginated<models.ListPokemonResponse>> {
    const input: models.ListPokemonRequest = {
      limit: params.limit,
      offset: params.offset,
    };
    const headers = new Headers();
    headers.set("user-agent", SDK_METADATA.userAgent);
    headers.set("Accept", "application/json");

    const payload = models.ListPokemonRequest$.outboundSchema.parse(input);
    const body = null;

    const path = this.templateURLComponent("/pokemon")();

    const query = [
      enc$.encodeForm("limit", payload.limit, {
        explode: false,
        charEncoding: "percent",
      }),
      enc$.encodeForm("offset", payload.offset, {
        explode: false,
        charEncoding: "percent",
      }),
    ]
      .filter(Boolean)
      .join("&");

    const security =
      typeof this.options$.security === "function"
        ? await this.options$.security()
        : this.options$.security;
    const securitySettings = this.resolveGlobalSecurity(security);

    const response = await this.fetch$(
      {
        security: securitySettings,
        method: "get",
        path,
        headers,
        query,
        body,
      },
      options
    );

    const responseFields = {
      ContentType:
        response.headers.get("content-type") ?? "application/octet-stream",
      StatusCode: response.status,
      RawResponse: response,
    };

    if (this.matchResponse(response, 200, "application/json")) {
      const responseBody = await response.json();
      const result = models.ListPokemonsResponse$.inboundSchema.parse({
        ...responseFields,
        classes: responseBody,
      });

      const rawOffset = parseUrlParam(result.classes?.next!, "offset");
      const offset = rawOffset ? parseInt(rawOffset, 10) : NaN;

      if (!isNaN(offset)) {
        return {
          ...result,
          next: () =>
            this.findAll({
              limit: params.limit,
              offset,
            }),
        };
      }

      // Fallback: no next page
      return {
        ...result,
        next: null,
      };
    } else if (this.matchResponse(response, "5XX", "application/json")) {
      const responseBody = await response.json();
      const result = models.APIError$.inboundSchema.parse({
        ...responseFields,
        ...responseBody,
      });
      throw new models.APIError(result);
    } else if (this.matchResponse(response, "4XX", "*")) {
      console.log("hello");
      const responseBody = await response.text();
      const result = models.APIError$.inboundSchema.parse({
        code: `${response.status}`,
        message: responseBody,
      });

      throw new models.APIError(result);
    } else if (this.matchResponse(response, "default", "*")) {
      const responseBody = await response.json();
      const result = models.ListPokemonsResponse$.inboundSchema.parse({
        ...responseFields,
        Error: responseBody,
      });

      return { ...result, next: null };
    } else {
      // console.log(response);
      const responseBody = await response.text();
      this.matchResponse(response, "default", "application/json");
      throw new models.SDKError(
        "Unexpected API response",
        response,
        responseBody
      );
    }
  }
}
