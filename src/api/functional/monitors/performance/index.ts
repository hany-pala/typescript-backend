/**
 * @packageDocumentation
 * @module api.functional.monitors.performance
 */
//================================================================
import { AesPkcs5, Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IPerformance } from "./../../../structures/monitors/IPerformance";

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller PerformanceController.get()
 * @path GET /monitors/performance
 */
export function get
    (
        connection: IConnection
    ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path()
    );
}
export namespace get
{
    export type Output = Primitive<IPerformance>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/performance";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(): string
    {
        return `/monitors/performance`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;