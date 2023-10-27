/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model airline
 *
 */
export type airline = $Result.DefaultSelection<Prisma.$airlinePayload>;
/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model customer_service
 *
 */
export type customer_service = $Result.DefaultSelection<Prisma.$customer_servicePayload>;
/**
 * Model flight
 *
 */
export type flight = $Result.DefaultSelection<Prisma.$flightPayload>;
/**
 * Model travel_agent
 *
 */
export type travel_agent = $Result.DefaultSelection<Prisma.$travel_agentPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Airlines
 * const airlines = await prisma.airline.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Airlines
   * const airlines = await prisma.airline.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.airline`: Exposes CRUD operations for the **airline** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Airlines
   * const airlines = await prisma.airline.findMany()
   * ```
   */
  get airline(): Prisma.airlineDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.customer_service`: Exposes CRUD operations for the **customer_service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customer_services
   * const customer_services = await prisma.customer_service.findMany()
   * ```
   */
  get customer_service(): Prisma.customer_serviceDelegate<ExtArgs>;

  /**
   * `prisma.flight`: Exposes CRUD operations for the **flight** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Flights
   * const flights = await prisma.flight.findMany()
   * ```
   */
  get flight(): Prisma.flightDelegate<ExtArgs>;

  /**
   * `prisma.travel_agent`: Exposes CRUD operations for the **travel_agent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Travel_agents
   * const travel_agents = await prisma.travel_agent.findMany()
   * ```
   */
  get travel_agent(): Prisma.travel_agentDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    airline: 'airline';
    booking: 'booking';
    customer_service: 'customer_service';
    flight: 'flight';
    travel_agent: 'travel_agent';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'airline' | 'booking' | 'customer_service' | 'flight' | 'travel_agent' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      airline: {
        payload: Prisma.$airlinePayload<ExtArgs>;
        fields: Prisma.airlineFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.airlineFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.airlineFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          findFirst: {
            args: Prisma.airlineFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.airlineFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          findMany: {
            args: Prisma.airlineFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>[];
          };
          create: {
            args: Prisma.airlineCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          createMany: {
            args: Prisma.airlineCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.airlineDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          update: {
            args: Prisma.airlineUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          deleteMany: {
            args: Prisma.airlineDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.airlineUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.airlineUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$airlinePayload>;
          };
          aggregate: {
            args: Prisma.AirlineAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAirline>;
          };
          groupBy: {
            args: Prisma.airlineGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AirlineGroupByOutputType>[];
          };
          count: {
            args: Prisma.airlineCountArgs<ExtArgs>;
            result: $Utils.Optional<AirlineCountAggregateOutputType> | number;
          };
        };
      };
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      customer_service: {
        payload: Prisma.$customer_servicePayload<ExtArgs>;
        fields: Prisma.customer_serviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customer_serviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customer_serviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          findFirst: {
            args: Prisma.customer_serviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customer_serviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          findMany: {
            args: Prisma.customer_serviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>[];
          };
          create: {
            args: Prisma.customer_serviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          createMany: {
            args: Prisma.customer_serviceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customer_serviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          update: {
            args: Prisma.customer_serviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          deleteMany: {
            args: Prisma.customer_serviceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customer_serviceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customer_serviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customer_servicePayload>;
          };
          aggregate: {
            args: Prisma.Customer_serviceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer_service>;
          };
          groupBy: {
            args: Prisma.customer_serviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Customer_serviceGroupByOutputType>[];
          };
          count: {
            args: Prisma.customer_serviceCountArgs<ExtArgs>;
            result: $Utils.Optional<Customer_serviceCountAggregateOutputType> | number;
          };
        };
      };
      flight: {
        payload: Prisma.$flightPayload<ExtArgs>;
        fields: Prisma.flightFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.flightFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.flightFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          findFirst: {
            args: Prisma.flightFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.flightFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          findMany: {
            args: Prisma.flightFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>[];
          };
          create: {
            args: Prisma.flightCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          createMany: {
            args: Prisma.flightCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.flightDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          update: {
            args: Prisma.flightUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          deleteMany: {
            args: Prisma.flightDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.flightUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.flightUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$flightPayload>;
          };
          aggregate: {
            args: Prisma.FlightAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFlight>;
          };
          groupBy: {
            args: Prisma.flightGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FlightGroupByOutputType>[];
          };
          count: {
            args: Prisma.flightCountArgs<ExtArgs>;
            result: $Utils.Optional<FlightCountAggregateOutputType> | number;
          };
        };
      };
      travel_agent: {
        payload: Prisma.$travel_agentPayload<ExtArgs>;
        fields: Prisma.travel_agentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.travel_agentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.travel_agentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          findFirst: {
            args: Prisma.travel_agentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.travel_agentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          findMany: {
            args: Prisma.travel_agentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>[];
          };
          create: {
            args: Prisma.travel_agentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          createMany: {
            args: Prisma.travel_agentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.travel_agentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          update: {
            args: Prisma.travel_agentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          deleteMany: {
            args: Prisma.travel_agentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.travel_agentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.travel_agentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$travel_agentPayload>;
          };
          aggregate: {
            args: Prisma.Travel_agentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTravel_agent>;
          };
          groupBy: {
            args: Prisma.travel_agentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Travel_agentGroupByOutputType>[];
          };
          count: {
            args: Prisma.travel_agentCountArgs<ExtArgs>;
            result: $Utils.Optional<Travel_agentCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AirlineCountOutputType
   */

  export type AirlineCountOutputType = {
    customer_service: number;
    flight: number;
  };

  export type AirlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_service?: boolean | AirlineCountOutputTypeCountCustomer_serviceArgs;
    flight?: boolean | AirlineCountOutputTypeCountFlightArgs;
  };

  // Custom InputTypes

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineCountOutputType
     */
    select?: AirlineCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountCustomer_serviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: customer_serviceWhereInput;
  };

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountFlightArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: flightWhereInput;
  };

  /**
   * Count Type FlightCountOutputType
   */

  export type FlightCountOutputType = {
    booking: number;
  };

  export type FlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | FlightCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightCountOutputType
     */
    select?: FlightCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    airline: number;
    booking: number;
    customer_service: number;
    travel_agent: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | UserCountOutputTypeCountAirlineArgs;
    booking?: boolean | UserCountOutputTypeCountBookingArgs;
    customer_service?: boolean | UserCountOutputTypeCountCustomer_serviceArgs;
    travel_agent?: boolean | UserCountOutputTypeCountTravel_agentArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAirlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: airlineWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: bookingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomer_serviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: customer_serviceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravel_agentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: travel_agentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model airline
   */

  export type AggregateAirline = {
    _count: AirlineCountAggregateOutputType | null;
    _min: AirlineMinAggregateOutputType | null;
    _max: AirlineMaxAggregateOutputType | null;
  };

  export type AirlineMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    founded_at: Date | null;
    headquarters: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type AirlineMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    founded_at: Date | null;
    headquarters: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type AirlineCountAggregateOutputType = {
    id: number;
    description: number;
    founded_at: number;
    headquarters: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type AirlineMinAggregateInputType = {
    id?: true;
    description?: true;
    founded_at?: true;
    headquarters?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AirlineMaxAggregateInputType = {
    id?: true;
    description?: true;
    founded_at?: true;
    headquarters?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AirlineCountAggregateInputType = {
    id?: true;
    description?: true;
    founded_at?: true;
    headquarters?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type AirlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airline to aggregate.
     */
    where?: airlineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlineOrderByWithRelationInput | airlineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: airlineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` airlines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned airlines
     **/
    _count?: true | AirlineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AirlineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AirlineMaxAggregateInputType;
  };

  export type GetAirlineAggregateType<T extends AirlineAggregateArgs> = {
    [P in keyof T & keyof AggregateAirline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirline[P]>
      : GetScalarType<T[P], AggregateAirline[P]>;
  };

  export type airlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: airlineWhereInput;
    orderBy?: airlineOrderByWithAggregationInput | airlineOrderByWithAggregationInput[];
    by: AirlineScalarFieldEnum[] | AirlineScalarFieldEnum;
    having?: airlineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AirlineCountAggregateInputType | true;
    _min?: AirlineMinAggregateInputType;
    _max?: AirlineMaxAggregateInputType;
  };

  export type AirlineGroupByOutputType = {
    id: string;
    description: string | null;
    founded_at: Date | null;
    headquarters: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: AirlineCountAggregateOutputType | null;
    _min: AirlineMinAggregateOutputType | null;
    _max: AirlineMaxAggregateOutputType | null;
  };

  type GetAirlineGroupByPayload<T extends airlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AirlineGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AirlineGroupByOutputType[P]>
          : GetScalarType<T[P], AirlineGroupByOutputType[P]>;
      }
    >
  >;

  export type airlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      founded_at?: boolean;
      headquarters?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      customer_service?: boolean | airline$customer_serviceArgs<ExtArgs>;
      flight?: boolean | airline$flightArgs<ExtArgs>;
      _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['airline']
  >;

  export type airlineSelectScalar = {
    id?: boolean;
    description?: boolean;
    founded_at?: boolean;
    headquarters?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type airlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    customer_service?: boolean | airline$customer_serviceArgs<ExtArgs>;
    flight?: boolean | airline$flightArgs<ExtArgs>;
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $airlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'airline';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      customer_service: Prisma.$customer_servicePayload<ExtArgs>[];
      flight: Prisma.$flightPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        founded_at: Date | null;
        headquarters: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['airline']
    >;
    composites: {};
  };

  type airlineGetPayload<S extends boolean | null | undefined | airlineDefaultArgs> = $Result.GetResult<
    Prisma.$airlinePayload,
    S
  >;

  type airlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    airlineFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AirlineCountAggregateInputType | true;
  };

  export interface airlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['airline']; meta: { name: 'airline' } };
    /**
     * Find zero or one Airline that matches the filter.
     * @param {airlineFindUniqueArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends airlineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, airlineFindUniqueArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Airline that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {airlineFindUniqueOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends airlineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__airlineClient<
      $Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Airline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineFindFirstArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends airlineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineFindFirstArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Airline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineFindFirstOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends airlineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airlines
     * const airlines = await prisma.airline.findMany()
     *
     * // Get first 10 Airlines
     * const airlines = await prisma.airline.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const airlineWithIdOnly = await prisma.airline.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends airlineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Airline.
     * @param {airlineCreateArgs} args - Arguments to create a Airline.
     * @example
     * // Create one Airline
     * const Airline = await prisma.airline.create({
     *   data: {
     *     // ... data to create a Airline
     *   }
     * })
     *
     **/
    create<T extends airlineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, airlineCreateArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Airlines.
     *     @param {airlineCreateManyArgs} args - Arguments to create many Airlines.
     *     @example
     *     // Create many Airlines
     *     const airline = await prisma.airline.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends airlineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Airline.
     * @param {airlineDeleteArgs} args - Arguments to delete one Airline.
     * @example
     * // Delete one Airline
     * const Airline = await prisma.airline.delete({
     *   where: {
     *     // ... filter to delete one Airline
     *   }
     * })
     *
     **/
    delete<T extends airlineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, airlineDeleteArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Airline.
     * @param {airlineUpdateArgs} args - Arguments to update one Airline.
     * @example
     * // Update one Airline
     * const airline = await prisma.airline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends airlineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, airlineUpdateArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Airlines.
     * @param {airlineDeleteManyArgs} args - Arguments to filter Airlines to delete.
     * @example
     * // Delete a few Airlines
     * const { count } = await prisma.airline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends airlineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, airlineDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airlines
     * const airline = await prisma.airline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends airlineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, airlineUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Airline.
     * @param {airlineUpsertArgs} args - Arguments to update or create a Airline.
     * @example
     * // Update or create a Airline
     * const airline = await prisma.airline.upsert({
     *   create: {
     *     // ... data to create a Airline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airline we want to update
     *   }
     * })
     **/
    upsert<T extends airlineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, airlineUpsertArgs<ExtArgs>>,
    ): Prisma__airlineClient<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineCountArgs} args - Arguments to filter Airlines to count.
     * @example
     * // Count the number of Airlines
     * const count = await prisma.airline.count({
     *   where: {
     *     // ... the filter for the Airlines we want to count
     *   }
     * })
     **/
    count<T extends airlineCountArgs>(
      args?: Subset<T, airlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AirlineAggregateArgs>(
      args: Subset<T, AirlineAggregateArgs>,
    ): Prisma.PrismaPromise<GetAirlineAggregateType<T>>;

    /**
     * Group by Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends airlineGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: airlineGroupByArgs['orderBy'] }
        : { orderBy?: airlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, airlineGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAirlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the airline model
     */
    readonly fields: airlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for airline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__airlineClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    customer_service<T extends airline$customer_serviceArgs<ExtArgs> = {}>(
      args?: Subset<T, airline$customer_serviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findMany'> | Null>;

    flight<T extends airline$flightArgs<ExtArgs> = {}>(
      args?: Subset<T, airline$flightArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the airline model
   */
  interface airlineFieldRefs {
    readonly id: FieldRef<'airline', 'String'>;
    readonly description: FieldRef<'airline', 'String'>;
    readonly founded_at: FieldRef<'airline', 'DateTime'>;
    readonly headquarters: FieldRef<'airline', 'String'>;
    readonly name: FieldRef<'airline', 'String'>;
    readonly created_at: FieldRef<'airline', 'DateTime'>;
    readonly updated_at: FieldRef<'airline', 'DateTime'>;
    readonly user_id: FieldRef<'airline', 'String'>;
    readonly tenant_id: FieldRef<'airline', 'String'>;
  }

  // Custom InputTypes

  /**
   * airline findUnique
   */
  export type airlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter, which airline to fetch.
     */
    where: airlineWhereUniqueInput;
  };

  /**
   * airline findUniqueOrThrow
   */
  export type airlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter, which airline to fetch.
     */
    where: airlineWhereUniqueInput;
  };

  /**
   * airline findFirst
   */
  export type airlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter, which airline to fetch.
     */
    where?: airlineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlineOrderByWithRelationInput | airlineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for airlines.
     */
    cursor?: airlineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` airlines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[];
  };

  /**
   * airline findFirstOrThrow
   */
  export type airlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter, which airline to fetch.
     */
    where?: airlineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlineOrderByWithRelationInput | airlineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for airlines.
     */
    cursor?: airlineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` airlines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[];
  };

  /**
   * airline findMany
   */
  export type airlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter, which airlines to fetch.
     */
    where?: airlineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlineOrderByWithRelationInput | airlineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing airlines.
     */
    cursor?: airlineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` airlines.
     */
    skip?: number;
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[];
  };

  /**
   * airline create
   */
  export type airlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * The data needed to create a airline.
     */
    data: XOR<airlineCreateInput, airlineUncheckedCreateInput>;
  };

  /**
   * airline createMany
   */
  export type airlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many airlines.
     */
    data: airlineCreateManyInput | airlineCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * airline update
   */
  export type airlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * The data needed to update a airline.
     */
    data: XOR<airlineUpdateInput, airlineUncheckedUpdateInput>;
    /**
     * Choose, which airline to update.
     */
    where: airlineWhereUniqueInput;
  };

  /**
   * airline updateMany
   */
  export type airlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update airlines.
     */
    data: XOR<airlineUpdateManyMutationInput, airlineUncheckedUpdateManyInput>;
    /**
     * Filter which airlines to update
     */
    where?: airlineWhereInput;
  };

  /**
   * airline upsert
   */
  export type airlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * The filter to search for the airline to update in case it exists.
     */
    where: airlineWhereUniqueInput;
    /**
     * In case the airline found by the `where` argument doesn't exist, create a new airline with this data.
     */
    create: XOR<airlineCreateInput, airlineUncheckedCreateInput>;
    /**
     * In case the airline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<airlineUpdateInput, airlineUncheckedUpdateInput>;
  };

  /**
   * airline delete
   */
  export type airlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    /**
     * Filter which airline to delete.
     */
    where: airlineWhereUniqueInput;
  };

  /**
   * airline deleteMany
   */
  export type airlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airlines to delete
     */
    where?: airlineWhereInput;
  };

  /**
   * airline.customer_service
   */
  export type airline$customer_serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    where?: customer_serviceWhereInput;
    orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
    cursor?: customer_serviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Customer_serviceScalarFieldEnum | Customer_serviceScalarFieldEnum[];
  };

  /**
   * airline.flight
   */
  export type airline$flightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    where?: flightWhereInput;
    orderBy?: flightOrderByWithRelationInput | flightOrderByWithRelationInput[];
    cursor?: flightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[];
  };

  /**
   * airline without action
   */
  export type airlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
  };

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    flight_id: string | null;
    booking_date: Date | null;
    seat_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    flight_id: string | null;
    booking_date: Date | null;
    seat_number: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    user_id: number;
    flight_id: number;
    booking_date: number;
    seat_number: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    user_id?: true;
    flight_id?: true;
    booking_date?: true;
    seat_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    flight_id?: true;
    booking_date?: true;
    seat_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    user_id?: true;
    flight_id?: true;
    booking_date?: true;
    seat_number?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    user_id: string;
    flight_id: string;
    booking_date: Date;
    seat_number: string;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      flight_id?: boolean;
      booking_date?: boolean;
      seat_number?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      flight?: boolean | flightDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    flight_id?: boolean;
    booking_date?: boolean;
    seat_number?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | flightDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      flight: Prisma.$flightPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        flight_id: string;
        booking_date: Date;
        seat_number: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    flight<T extends flightDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, flightDefaultArgs<ExtArgs>>,
    ): Prisma__flightClient<
      $Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly user_id: FieldRef<'booking', 'String'>;
    readonly flight_id: FieldRef<'booking', 'String'>;
    readonly booking_date: FieldRef<'booking', 'DateTime'>;
    readonly seat_number: FieldRef<'booking', 'String'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model customer_service
   */

  export type AggregateCustomer_service = {
    _count: Customer_serviceCountAggregateOutputType | null;
    _min: Customer_serviceMinAggregateOutputType | null;
    _max: Customer_serviceMaxAggregateOutputType | null;
  };

  export type Customer_serviceMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    airline_id: string | null;
    service_hours: string | null;
    service_phone: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Customer_serviceMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    airline_id: string | null;
    service_hours: string | null;
    service_phone: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Customer_serviceCountAggregateOutputType = {
    id: number;
    user_id: number;
    airline_id: number;
    service_hours: number;
    service_phone: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Customer_serviceMinAggregateInputType = {
    id?: true;
    user_id?: true;
    airline_id?: true;
    service_hours?: true;
    service_phone?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Customer_serviceMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    airline_id?: true;
    service_hours?: true;
    service_phone?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Customer_serviceCountAggregateInputType = {
    id?: true;
    user_id?: true;
    airline_id?: true;
    service_hours?: true;
    service_phone?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Customer_serviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_service to aggregate.
     */
    where?: customer_serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customer_services to fetch.
     */
    orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customer_serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customer_services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customer_services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customer_services
     **/
    _count?: true | Customer_serviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Customer_serviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Customer_serviceMaxAggregateInputType;
  };

  export type GetCustomer_serviceAggregateType<T extends Customer_serviceAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer_service]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_service[P]>
      : GetScalarType<T[P], AggregateCustomer_service[P]>;
  };

  export type customer_serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_serviceWhereInput;
    orderBy?: customer_serviceOrderByWithAggregationInput | customer_serviceOrderByWithAggregationInput[];
    by: Customer_serviceScalarFieldEnum[] | Customer_serviceScalarFieldEnum;
    having?: customer_serviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Customer_serviceCountAggregateInputType | true;
    _min?: Customer_serviceMinAggregateInputType;
    _max?: Customer_serviceMaxAggregateInputType;
  };

  export type Customer_serviceGroupByOutputType = {
    id: string;
    user_id: string;
    airline_id: string;
    service_hours: string;
    service_phone: string;
    created_at: Date;
    updated_at: Date;
    _count: Customer_serviceCountAggregateOutputType | null;
    _min: Customer_serviceMinAggregateOutputType | null;
    _max: Customer_serviceMaxAggregateOutputType | null;
  };

  type GetCustomer_serviceGroupByPayload<T extends customer_serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_serviceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Customer_serviceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Customer_serviceGroupByOutputType[P]>
          : GetScalarType<T[P], Customer_serviceGroupByOutputType[P]>;
      }
    >
  >;

  export type customer_serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        airline_id?: boolean;
        service_hours?: boolean;
        service_phone?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        airline?: boolean | airlineDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer_service']
    >;

  export type customer_serviceSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    airline_id?: boolean;
    service_hours?: boolean;
    service_phone?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customer_serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | airlineDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customer_servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer_service';
    objects: {
      airline: Prisma.$airlinePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        airline_id: string;
        service_hours: string;
        service_phone: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer_service']
    >;
    composites: {};
  };

  type customer_serviceGetPayload<S extends boolean | null | undefined | customer_serviceDefaultArgs> =
    $Result.GetResult<Prisma.$customer_servicePayload, S>;

  type customer_serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customer_serviceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Customer_serviceCountAggregateInputType | true;
  };

  export interface customer_serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer_service']; meta: { name: 'customer_service' } };
    /**
     * Find zero or one Customer_service that matches the filter.
     * @param {customer_serviceFindUniqueArgs} args - Arguments to find a Customer_service
     * @example
     * // Get one Customer_service
     * const customer_service = await prisma.customer_service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customer_serviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer_service that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customer_serviceFindUniqueOrThrowArgs} args - Arguments to find a Customer_service
     * @example
     * // Get one Customer_service
     * const customer_service = await prisma.customer_service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customer_serviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer_service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceFindFirstArgs} args - Arguments to find a Customer_service
     * @example
     * // Get one Customer_service
     * const customer_service = await prisma.customer_service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customer_serviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceFindFirstArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer_service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceFindFirstOrThrowArgs} args - Arguments to find a Customer_service
     * @example
     * // Get one Customer_service
     * const customer_service = await prisma.customer_service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customer_serviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customer_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_services
     * const customer_services = await prisma.customer_service.findMany()
     *
     * // Get first 10 Customer_services
     * const customer_services = await prisma.customer_service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customer_serviceWithIdOnly = await prisma.customer_service.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customer_serviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer_service.
     * @param {customer_serviceCreateArgs} args - Arguments to create a Customer_service.
     * @example
     * // Create one Customer_service
     * const Customer_service = await prisma.customer_service.create({
     *   data: {
     *     // ... data to create a Customer_service
     *   }
     * })
     *
     **/
    create<T extends customer_serviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceCreateArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Customer_services.
     *     @param {customer_serviceCreateManyArgs} args - Arguments to create many Customer_services.
     *     @example
     *     // Create many Customer_services
     *     const customer_service = await prisma.customer_service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customer_serviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer_service.
     * @param {customer_serviceDeleteArgs} args - Arguments to delete one Customer_service.
     * @example
     * // Delete one Customer_service
     * const Customer_service = await prisma.customer_service.delete({
     *   where: {
     *     // ... filter to delete one Customer_service
     *   }
     * })
     *
     **/
    delete<T extends customer_serviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceDeleteArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Customer_service.
     * @param {customer_serviceUpdateArgs} args - Arguments to update one Customer_service.
     * @example
     * // Update one Customer_service
     * const customer_service = await prisma.customer_service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customer_serviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceUpdateArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Customer_services.
     * @param {customer_serviceDeleteManyArgs} args - Arguments to filter Customer_services to delete.
     * @example
     * // Delete a few Customer_services
     * const { count } = await prisma.customer_service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customer_serviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customer_serviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customer_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_services
     * const customer_service = await prisma.customer_service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customer_serviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer_service.
     * @param {customer_serviceUpsertArgs} args - Arguments to update or create a Customer_service.
     * @example
     * // Update or create a Customer_service
     * const customer_service = await prisma.customer_service.upsert({
     *   create: {
     *     // ... data to create a Customer_service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_service we want to update
     *   }
     * })
     **/
    upsert<T extends customer_serviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customer_serviceUpsertArgs<ExtArgs>>,
    ): Prisma__customer_serviceClient<
      $Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Customer_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceCountArgs} args - Arguments to filter Customer_services to count.
     * @example
     * // Count the number of Customer_services
     * const count = await prisma.customer_service.count({
     *   where: {
     *     // ... the filter for the Customer_services we want to count
     *   }
     * })
     **/
    count<T extends customer_serviceCountArgs>(
      args?: Subset<T, customer_serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_serviceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_serviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Customer_serviceAggregateArgs>(
      args: Subset<T, Customer_serviceAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomer_serviceAggregateType<T>>;

    /**
     * Group by Customer_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customer_serviceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customer_serviceGroupByArgs['orderBy'] }
        : { orderBy?: customer_serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customer_serviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomer_serviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer_service model
     */
    readonly fields: customer_serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer_service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customer_serviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    airline<T extends airlineDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, airlineDefaultArgs<ExtArgs>>,
    ): Prisma__airlineClient<
      $Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer_service model
   */
  interface customer_serviceFieldRefs {
    readonly id: FieldRef<'customer_service', 'String'>;
    readonly user_id: FieldRef<'customer_service', 'String'>;
    readonly airline_id: FieldRef<'customer_service', 'String'>;
    readonly service_hours: FieldRef<'customer_service', 'String'>;
    readonly service_phone: FieldRef<'customer_service', 'String'>;
    readonly created_at: FieldRef<'customer_service', 'DateTime'>;
    readonly updated_at: FieldRef<'customer_service', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer_service findUnique
   */
  export type customer_serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * Filter, which customer_service to fetch.
     */
    where: customer_serviceWhereUniqueInput;
  };

  /**
   * customer_service findUniqueOrThrow
   */
  export type customer_serviceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * Filter, which customer_service to fetch.
     */
    where: customer_serviceWhereUniqueInput;
  };

  /**
   * customer_service findFirst
   */
  export type customer_serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * Filter, which customer_service to fetch.
     */
    where?: customer_serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customer_services to fetch.
     */
    orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customer_services.
     */
    cursor?: customer_serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customer_services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customer_services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customer_services.
     */
    distinct?: Customer_serviceScalarFieldEnum | Customer_serviceScalarFieldEnum[];
  };

  /**
   * customer_service findFirstOrThrow
   */
  export type customer_serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the customer_service
       */
      select?: customer_serviceSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: customer_serviceInclude<ExtArgs> | null;
      /**
       * Filter, which customer_service to fetch.
       */
      where?: customer_serviceWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of customer_services to fetch.
       */
      orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for customer_services.
       */
      cursor?: customer_serviceWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` customer_services from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` customer_services.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of customer_services.
       */
      distinct?: Customer_serviceScalarFieldEnum | Customer_serviceScalarFieldEnum[];
    };

  /**
   * customer_service findMany
   */
  export type customer_serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * Filter, which customer_services to fetch.
     */
    where?: customer_serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customer_services to fetch.
     */
    orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customer_services.
     */
    cursor?: customer_serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customer_services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customer_services.
     */
    skip?: number;
    distinct?: Customer_serviceScalarFieldEnum | Customer_serviceScalarFieldEnum[];
  };

  /**
   * customer_service create
   */
  export type customer_serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer_service.
     */
    data: XOR<customer_serviceCreateInput, customer_serviceUncheckedCreateInput>;
  };

  /**
   * customer_service createMany
   */
  export type customer_serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customer_services.
     */
    data: customer_serviceCreateManyInput | customer_serviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer_service update
   */
  export type customer_serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer_service.
     */
    data: XOR<customer_serviceUpdateInput, customer_serviceUncheckedUpdateInput>;
    /**
     * Choose, which customer_service to update.
     */
    where: customer_serviceWhereUniqueInput;
  };

  /**
   * customer_service updateMany
   */
  export type customer_serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customer_services.
     */
    data: XOR<customer_serviceUpdateManyMutationInput, customer_serviceUncheckedUpdateManyInput>;
    /**
     * Filter which customer_services to update
     */
    where?: customer_serviceWhereInput;
  };

  /**
   * customer_service upsert
   */
  export type customer_serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer_service to update in case it exists.
     */
    where: customer_serviceWhereUniqueInput;
    /**
     * In case the customer_service found by the `where` argument doesn't exist, create a new customer_service with this data.
     */
    create: XOR<customer_serviceCreateInput, customer_serviceUncheckedCreateInput>;
    /**
     * In case the customer_service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customer_serviceUpdateInput, customer_serviceUncheckedUpdateInput>;
  };

  /**
   * customer_service delete
   */
  export type customer_serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    /**
     * Filter which customer_service to delete.
     */
    where: customer_serviceWhereUniqueInput;
  };

  /**
   * customer_service deleteMany
   */
  export type customer_serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_services to delete
     */
    where?: customer_serviceWhereInput;
  };

  /**
   * customer_service without action
   */
  export type customer_serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
  };

  /**
   * Model flight
   */

  export type AggregateFlight = {
    _count: FlightCountAggregateOutputType | null;
    _min: FlightMinAggregateOutputType | null;
    _max: FlightMaxAggregateOutputType | null;
  };

  export type FlightMinAggregateOutputType = {
    id: string | null;
    flight_number: string | null;
    departure_airport: string | null;
    arrival_airport: string | null;
    departure_time: Date | null;
    arrival_time: Date | null;
    airline_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FlightMaxAggregateOutputType = {
    id: string | null;
    flight_number: string | null;
    departure_airport: string | null;
    arrival_airport: string | null;
    departure_time: Date | null;
    arrival_time: Date | null;
    airline_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FlightCountAggregateOutputType = {
    id: number;
    flight_number: number;
    departure_airport: number;
    arrival_airport: number;
    departure_time: number;
    arrival_time: number;
    airline_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FlightMinAggregateInputType = {
    id?: true;
    flight_number?: true;
    departure_airport?: true;
    arrival_airport?: true;
    departure_time?: true;
    arrival_time?: true;
    airline_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FlightMaxAggregateInputType = {
    id?: true;
    flight_number?: true;
    departure_airport?: true;
    arrival_airport?: true;
    departure_time?: true;
    arrival_time?: true;
    airline_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FlightCountAggregateInputType = {
    id?: true;
    flight_number?: true;
    departure_airport?: true;
    arrival_airport?: true;
    departure_time?: true;
    arrival_time?: true;
    airline_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flight to aggregate.
     */
    where?: flightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of flights to fetch.
     */
    orderBy?: flightOrderByWithRelationInput | flightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: flightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` flights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` flights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned flights
     **/
    _count?: true | FlightCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FlightMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FlightMaxAggregateInputType;
  };

  export type GetFlightAggregateType<T extends FlightAggregateArgs> = {
    [P in keyof T & keyof AggregateFlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlight[P]>
      : GetScalarType<T[P], AggregateFlight[P]>;
  };

  export type flightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flightWhereInput;
    orderBy?: flightOrderByWithAggregationInput | flightOrderByWithAggregationInput[];
    by: FlightScalarFieldEnum[] | FlightScalarFieldEnum;
    having?: flightScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FlightCountAggregateInputType | true;
    _min?: FlightMinAggregateInputType;
    _max?: FlightMaxAggregateInputType;
  };

  export type FlightGroupByOutputType = {
    id: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date;
    arrival_time: Date;
    airline_id: string;
    created_at: Date;
    updated_at: Date;
    _count: FlightCountAggregateOutputType | null;
    _min: FlightMinAggregateOutputType | null;
    _max: FlightMaxAggregateOutputType | null;
  };

  type GetFlightGroupByPayload<T extends flightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FlightGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FlightGroupByOutputType[P]>
          : GetScalarType<T[P], FlightGroupByOutputType[P]>;
      }
    >
  >;

  export type flightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      flight_number?: boolean;
      departure_airport?: boolean;
      arrival_airport?: boolean;
      departure_time?: boolean;
      arrival_time?: boolean;
      airline_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | flight$bookingArgs<ExtArgs>;
      airline?: boolean | airlineDefaultArgs<ExtArgs>;
      _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['flight']
  >;

  export type flightSelectScalar = {
    id?: boolean;
    flight_number?: boolean;
    departure_airport?: boolean;
    arrival_airport?: boolean;
    departure_time?: boolean;
    arrival_time?: boolean;
    airline_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type flightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | flight$bookingArgs<ExtArgs>;
    airline?: boolean | airlineDefaultArgs<ExtArgs>;
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $flightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'flight';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      airline: Prisma.$airlinePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        flight_number: string;
        departure_airport: string;
        arrival_airport: string;
        departure_time: Date;
        arrival_time: Date;
        airline_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['flight']
    >;
    composites: {};
  };

  type flightGetPayload<S extends boolean | null | undefined | flightDefaultArgs> = $Result.GetResult<
    Prisma.$flightPayload,
    S
  >;

  type flightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    flightFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: FlightCountAggregateInputType | true;
  };

  export interface flightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flight']; meta: { name: 'flight' } };
    /**
     * Find zero or one Flight that matches the filter.
     * @param {flightFindUniqueArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends flightFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, flightFindUniqueArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Flight that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {flightFindUniqueOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends flightFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, flightFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Flight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightFindFirstArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends flightFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, flightFindFirstArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Flight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightFindFirstOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends flightFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, flightFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flight.findMany()
     *
     * // Get first 10 Flights
     * const flights = await prisma.flight.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const flightWithIdOnly = await prisma.flight.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends flightFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, flightFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Flight.
     * @param {flightCreateArgs} args - Arguments to create a Flight.
     * @example
     * // Create one Flight
     * const Flight = await prisma.flight.create({
     *   data: {
     *     // ... data to create a Flight
     *   }
     * })
     *
     **/
    create<T extends flightCreateArgs<ExtArgs>>(
      args: SelectSubset<T, flightCreateArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Flights.
     *     @param {flightCreateManyArgs} args - Arguments to create many Flights.
     *     @example
     *     // Create many Flights
     *     const flight = await prisma.flight.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends flightCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, flightCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Flight.
     * @param {flightDeleteArgs} args - Arguments to delete one Flight.
     * @example
     * // Delete one Flight
     * const Flight = await prisma.flight.delete({
     *   where: {
     *     // ... filter to delete one Flight
     *   }
     * })
     *
     **/
    delete<T extends flightDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, flightDeleteArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Flight.
     * @param {flightUpdateArgs} args - Arguments to update one Flight.
     * @example
     * // Update one Flight
     * const flight = await prisma.flight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends flightUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, flightUpdateArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Flights.
     * @param {flightDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends flightDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, flightDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends flightUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, flightUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Flight.
     * @param {flightUpsertArgs} args - Arguments to update or create a Flight.
     * @example
     * // Update or create a Flight
     * const flight = await prisma.flight.upsert({
     *   create: {
     *     // ... data to create a Flight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flight we want to update
     *   }
     * })
     **/
    upsert<T extends flightUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, flightUpsertArgs<ExtArgs>>,
    ): Prisma__flightClient<$Result.GetResult<Prisma.$flightPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flight.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
     **/
    count<T extends flightCountArgs>(
      args?: Subset<T, flightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FlightAggregateArgs>(
      args: Subset<T, FlightAggregateArgs>,
    ): Prisma.PrismaPromise<GetFlightAggregateType<T>>;

    /**
     * Group by Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends flightGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flightGroupByArgs['orderBy'] }
        : { orderBy?: flightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, flightGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the flight model
     */
    readonly fields: flightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flightClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends flight$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, flight$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    airline<T extends airlineDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, airlineDefaultArgs<ExtArgs>>,
    ): Prisma__airlineClient<
      $Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the flight model
   */
  interface flightFieldRefs {
    readonly id: FieldRef<'flight', 'String'>;
    readonly flight_number: FieldRef<'flight', 'String'>;
    readonly departure_airport: FieldRef<'flight', 'String'>;
    readonly arrival_airport: FieldRef<'flight', 'String'>;
    readonly departure_time: FieldRef<'flight', 'DateTime'>;
    readonly arrival_time: FieldRef<'flight', 'DateTime'>;
    readonly airline_id: FieldRef<'flight', 'String'>;
    readonly created_at: FieldRef<'flight', 'DateTime'>;
    readonly updated_at: FieldRef<'flight', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * flight findUnique
   */
  export type flightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter, which flight to fetch.
     */
    where: flightWhereUniqueInput;
  };

  /**
   * flight findUniqueOrThrow
   */
  export type flightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter, which flight to fetch.
     */
    where: flightWhereUniqueInput;
  };

  /**
   * flight findFirst
   */
  export type flightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter, which flight to fetch.
     */
    where?: flightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of flights to fetch.
     */
    orderBy?: flightOrderByWithRelationInput | flightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for flights.
     */
    cursor?: flightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` flights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` flights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[];
  };

  /**
   * flight findFirstOrThrow
   */
  export type flightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter, which flight to fetch.
     */
    where?: flightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of flights to fetch.
     */
    orderBy?: flightOrderByWithRelationInput | flightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for flights.
     */
    cursor?: flightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` flights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` flights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[];
  };

  /**
   * flight findMany
   */
  export type flightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter, which flights to fetch.
     */
    where?: flightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of flights to fetch.
     */
    orderBy?: flightOrderByWithRelationInput | flightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing flights.
     */
    cursor?: flightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` flights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` flights.
     */
    skip?: number;
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[];
  };

  /**
   * flight create
   */
  export type flightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * The data needed to create a flight.
     */
    data: XOR<flightCreateInput, flightUncheckedCreateInput>;
  };

  /**
   * flight createMany
   */
  export type flightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flights.
     */
    data: flightCreateManyInput | flightCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * flight update
   */
  export type flightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * The data needed to update a flight.
     */
    data: XOR<flightUpdateInput, flightUncheckedUpdateInput>;
    /**
     * Choose, which flight to update.
     */
    where: flightWhereUniqueInput;
  };

  /**
   * flight updateMany
   */
  export type flightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flights.
     */
    data: XOR<flightUpdateManyMutationInput, flightUncheckedUpdateManyInput>;
    /**
     * Filter which flights to update
     */
    where?: flightWhereInput;
  };

  /**
   * flight upsert
   */
  export type flightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * The filter to search for the flight to update in case it exists.
     */
    where: flightWhereUniqueInput;
    /**
     * In case the flight found by the `where` argument doesn't exist, create a new flight with this data.
     */
    create: XOR<flightCreateInput, flightUncheckedCreateInput>;
    /**
     * In case the flight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flightUpdateInput, flightUncheckedUpdateInput>;
  };

  /**
   * flight delete
   */
  export type flightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
    /**
     * Filter which flight to delete.
     */
    where: flightWhereUniqueInput;
  };

  /**
   * flight deleteMany
   */
  export type flightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flights to delete
     */
    where?: flightWhereInput;
  };

  /**
   * flight.booking
   */
  export type flight$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * flight without action
   */
  export type flightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flight
     */
    select?: flightSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: flightInclude<ExtArgs> | null;
  };

  /**
   * Model travel_agent
   */

  export type AggregateTravel_agent = {
    _count: Travel_agentCountAggregateOutputType | null;
    _min: Travel_agentMinAggregateOutputType | null;
    _max: Travel_agentMaxAggregateOutputType | null;
  };

  export type Travel_agentMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    agency_name: string | null;
    agency_address: string | null;
    agency_phone: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Travel_agentMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    agency_name: string | null;
    agency_address: string | null;
    agency_phone: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Travel_agentCountAggregateOutputType = {
    id: number;
    user_id: number;
    agency_name: number;
    agency_address: number;
    agency_phone: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Travel_agentMinAggregateInputType = {
    id?: true;
    user_id?: true;
    agency_name?: true;
    agency_address?: true;
    agency_phone?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Travel_agentMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    agency_name?: true;
    agency_address?: true;
    agency_phone?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Travel_agentCountAggregateInputType = {
    id?: true;
    user_id?: true;
    agency_name?: true;
    agency_address?: true;
    agency_phone?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Travel_agentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_agent to aggregate.
     */
    where?: travel_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of travel_agents to fetch.
     */
    orderBy?: travel_agentOrderByWithRelationInput | travel_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: travel_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` travel_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` travel_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned travel_agents
     **/
    _count?: true | Travel_agentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Travel_agentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Travel_agentMaxAggregateInputType;
  };

  export type GetTravel_agentAggregateType<T extends Travel_agentAggregateArgs> = {
    [P in keyof T & keyof AggregateTravel_agent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel_agent[P]>
      : GetScalarType<T[P], AggregateTravel_agent[P]>;
  };

  export type travel_agentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: travel_agentWhereInput;
    orderBy?: travel_agentOrderByWithAggregationInput | travel_agentOrderByWithAggregationInput[];
    by: Travel_agentScalarFieldEnum[] | Travel_agentScalarFieldEnum;
    having?: travel_agentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Travel_agentCountAggregateInputType | true;
    _min?: Travel_agentMinAggregateInputType;
    _max?: Travel_agentMaxAggregateInputType;
  };

  export type Travel_agentGroupByOutputType = {
    id: string;
    user_id: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at: Date;
    updated_at: Date;
    _count: Travel_agentCountAggregateOutputType | null;
    _min: Travel_agentMinAggregateOutputType | null;
    _max: Travel_agentMaxAggregateOutputType | null;
  };

  type GetTravel_agentGroupByPayload<T extends travel_agentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Travel_agentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Travel_agentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Travel_agentGroupByOutputType[P]>
          : GetScalarType<T[P], Travel_agentGroupByOutputType[P]>;
      }
    >
  >;

  export type travel_agentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        agency_name?: boolean;
        agency_address?: boolean;
        agency_phone?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['travel_agent']
    >;

  export type travel_agentSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    agency_name?: boolean;
    agency_address?: boolean;
    agency_phone?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type travel_agentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $travel_agentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'travel_agent';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        agency_name: string;
        agency_address: string;
        agency_phone: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['travel_agent']
    >;
    composites: {};
  };

  type travel_agentGetPayload<S extends boolean | null | undefined | travel_agentDefaultArgs> = $Result.GetResult<
    Prisma.$travel_agentPayload,
    S
  >;

  type travel_agentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    travel_agentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Travel_agentCountAggregateInputType | true;
  };

  export interface travel_agentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['travel_agent']; meta: { name: 'travel_agent' } };
    /**
     * Find zero or one Travel_agent that matches the filter.
     * @param {travel_agentFindUniqueArgs} args - Arguments to find a Travel_agent
     * @example
     * // Get one Travel_agent
     * const travel_agent = await prisma.travel_agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends travel_agentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentFindUniqueArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<
      $Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Travel_agent that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {travel_agentFindUniqueOrThrowArgs} args - Arguments to find a Travel_agent
     * @example
     * // Get one Travel_agent
     * const travel_agent = await prisma.travel_agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends travel_agentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<
      $Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Travel_agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentFindFirstArgs} args - Arguments to find a Travel_agent
     * @example
     * // Get one Travel_agent
     * const travel_agent = await prisma.travel_agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends travel_agentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentFindFirstArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<
      $Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Travel_agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentFindFirstOrThrowArgs} args - Arguments to find a Travel_agent
     * @example
     * // Get one Travel_agent
     * const travel_agent = await prisma.travel_agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends travel_agentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<
      $Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Travel_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travel_agents
     * const travel_agents = await prisma.travel_agent.findMany()
     *
     * // Get first 10 Travel_agents
     * const travel_agents = await prisma.travel_agent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const travel_agentWithIdOnly = await prisma.travel_agent.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends travel_agentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Travel_agent.
     * @param {travel_agentCreateArgs} args - Arguments to create a Travel_agent.
     * @example
     * // Create one Travel_agent
     * const Travel_agent = await prisma.travel_agent.create({
     *   data: {
     *     // ... data to create a Travel_agent
     *   }
     * })
     *
     **/
    create<T extends travel_agentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentCreateArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Travel_agents.
     *     @param {travel_agentCreateManyArgs} args - Arguments to create many Travel_agents.
     *     @example
     *     // Create many Travel_agents
     *     const travel_agent = await prisma.travel_agent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends travel_agentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Travel_agent.
     * @param {travel_agentDeleteArgs} args - Arguments to delete one Travel_agent.
     * @example
     * // Delete one Travel_agent
     * const Travel_agent = await prisma.travel_agent.delete({
     *   where: {
     *     // ... filter to delete one Travel_agent
     *   }
     * })
     *
     **/
    delete<T extends travel_agentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentDeleteArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Travel_agent.
     * @param {travel_agentUpdateArgs} args - Arguments to update one Travel_agent.
     * @example
     * // Update one Travel_agent
     * const travel_agent = await prisma.travel_agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends travel_agentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentUpdateArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Travel_agents.
     * @param {travel_agentDeleteManyArgs} args - Arguments to filter Travel_agents to delete.
     * @example
     * // Delete a few Travel_agents
     * const { count } = await prisma.travel_agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends travel_agentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, travel_agentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Travel_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travel_agents
     * const travel_agent = await prisma.travel_agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends travel_agentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Travel_agent.
     * @param {travel_agentUpsertArgs} args - Arguments to update or create a Travel_agent.
     * @example
     * // Update or create a Travel_agent
     * const travel_agent = await prisma.travel_agent.upsert({
     *   create: {
     *     // ... data to create a Travel_agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel_agent we want to update
     *   }
     * })
     **/
    upsert<T extends travel_agentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, travel_agentUpsertArgs<ExtArgs>>,
    ): Prisma__travel_agentClient<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Travel_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentCountArgs} args - Arguments to filter Travel_agents to count.
     * @example
     * // Count the number of Travel_agents
     * const count = await prisma.travel_agent.count({
     *   where: {
     *     // ... the filter for the Travel_agents we want to count
     *   }
     * })
     **/
    count<T extends travel_agentCountArgs>(
      args?: Subset<T, travel_agentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Travel_agentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Travel_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Travel_agentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Travel_agentAggregateArgs>(
      args: Subset<T, Travel_agentAggregateArgs>,
    ): Prisma.PrismaPromise<GetTravel_agentAggregateType<T>>;

    /**
     * Group by Travel_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_agentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends travel_agentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: travel_agentGroupByArgs['orderBy'] }
        : { orderBy?: travel_agentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, travel_agentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTravel_agentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the travel_agent model
     */
    readonly fields: travel_agentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for travel_agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__travel_agentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the travel_agent model
   */
  interface travel_agentFieldRefs {
    readonly id: FieldRef<'travel_agent', 'String'>;
    readonly user_id: FieldRef<'travel_agent', 'String'>;
    readonly agency_name: FieldRef<'travel_agent', 'String'>;
    readonly agency_address: FieldRef<'travel_agent', 'String'>;
    readonly agency_phone: FieldRef<'travel_agent', 'String'>;
    readonly created_at: FieldRef<'travel_agent', 'DateTime'>;
    readonly updated_at: FieldRef<'travel_agent', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * travel_agent findUnique
   */
  export type travel_agentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter, which travel_agent to fetch.
     */
    where: travel_agentWhereUniqueInput;
  };

  /**
   * travel_agent findUniqueOrThrow
   */
  export type travel_agentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter, which travel_agent to fetch.
     */
    where: travel_agentWhereUniqueInput;
  };

  /**
   * travel_agent findFirst
   */
  export type travel_agentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter, which travel_agent to fetch.
     */
    where?: travel_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of travel_agents to fetch.
     */
    orderBy?: travel_agentOrderByWithRelationInput | travel_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for travel_agents.
     */
    cursor?: travel_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` travel_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` travel_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of travel_agents.
     */
    distinct?: Travel_agentScalarFieldEnum | Travel_agentScalarFieldEnum[];
  };

  /**
   * travel_agent findFirstOrThrow
   */
  export type travel_agentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter, which travel_agent to fetch.
     */
    where?: travel_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of travel_agents to fetch.
     */
    orderBy?: travel_agentOrderByWithRelationInput | travel_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for travel_agents.
     */
    cursor?: travel_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` travel_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` travel_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of travel_agents.
     */
    distinct?: Travel_agentScalarFieldEnum | Travel_agentScalarFieldEnum[];
  };

  /**
   * travel_agent findMany
   */
  export type travel_agentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter, which travel_agents to fetch.
     */
    where?: travel_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of travel_agents to fetch.
     */
    orderBy?: travel_agentOrderByWithRelationInput | travel_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing travel_agents.
     */
    cursor?: travel_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` travel_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` travel_agents.
     */
    skip?: number;
    distinct?: Travel_agentScalarFieldEnum | Travel_agentScalarFieldEnum[];
  };

  /**
   * travel_agent create
   */
  export type travel_agentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * The data needed to create a travel_agent.
     */
    data: XOR<travel_agentCreateInput, travel_agentUncheckedCreateInput>;
  };

  /**
   * travel_agent createMany
   */
  export type travel_agentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many travel_agents.
     */
    data: travel_agentCreateManyInput | travel_agentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * travel_agent update
   */
  export type travel_agentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * The data needed to update a travel_agent.
     */
    data: XOR<travel_agentUpdateInput, travel_agentUncheckedUpdateInput>;
    /**
     * Choose, which travel_agent to update.
     */
    where: travel_agentWhereUniqueInput;
  };

  /**
   * travel_agent updateMany
   */
  export type travel_agentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update travel_agents.
     */
    data: XOR<travel_agentUpdateManyMutationInput, travel_agentUncheckedUpdateManyInput>;
    /**
     * Filter which travel_agents to update
     */
    where?: travel_agentWhereInput;
  };

  /**
   * travel_agent upsert
   */
  export type travel_agentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * The filter to search for the travel_agent to update in case it exists.
     */
    where: travel_agentWhereUniqueInput;
    /**
     * In case the travel_agent found by the `where` argument doesn't exist, create a new travel_agent with this data.
     */
    create: XOR<travel_agentCreateInput, travel_agentUncheckedCreateInput>;
    /**
     * In case the travel_agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<travel_agentUpdateInput, travel_agentUncheckedUpdateInput>;
  };

  /**
   * travel_agent delete
   */
  export type travel_agentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    /**
     * Filter which travel_agent to delete.
     */
    where: travel_agentWhereUniqueInput;
  };

  /**
   * travel_agent deleteMany
   */
  export type travel_agentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_agents to delete
     */
    where?: travel_agentWhereInput;
  };

  /**
   * travel_agent without action
   */
  export type travel_agentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      airline?: boolean | user$airlineArgs<ExtArgs>;
      booking?: boolean | user$bookingArgs<ExtArgs>;
      customer_service?: boolean | user$customer_serviceArgs<ExtArgs>;
      travel_agent?: boolean | user$travel_agentArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | user$airlineArgs<ExtArgs>;
    booking?: boolean | user$bookingArgs<ExtArgs>;
    customer_service?: boolean | user$customer_serviceArgs<ExtArgs>;
    travel_agent?: boolean | user$travel_agentArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      airline: Prisma.$airlinePayload<ExtArgs>[];
      booking: Prisma.$bookingPayload<ExtArgs>[];
      customer_service: Prisma.$customer_servicePayload<ExtArgs>[];
      travel_agent: Prisma.$travel_agentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    airline<T extends user$airlineArgs<ExtArgs> = {}>(
      args?: Subset<T, user$airlineArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airlinePayload<ExtArgs>, T, 'findMany'> | Null>;

    booking<T extends user$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer_service<T extends user$customer_serviceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customer_serviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_servicePayload<ExtArgs>, T, 'findMany'> | Null>;

    travel_agent<T extends user$travel_agentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$travel_agentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$travel_agentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.airline
   */
  export type user$airlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airline
     */
    select?: airlineSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: airlineInclude<ExtArgs> | null;
    where?: airlineWhereInput;
    orderBy?: airlineOrderByWithRelationInput | airlineOrderByWithRelationInput[];
    cursor?: airlineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[];
  };

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.customer_service
   */
  export type user$customer_serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_service
     */
    select?: customer_serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customer_serviceInclude<ExtArgs> | null;
    where?: customer_serviceWhereInput;
    orderBy?: customer_serviceOrderByWithRelationInput | customer_serviceOrderByWithRelationInput[];
    cursor?: customer_serviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Customer_serviceScalarFieldEnum | Customer_serviceScalarFieldEnum[];
  };

  /**
   * user.travel_agent
   */
  export type user$travel_agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_agent
     */
    select?: travel_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: travel_agentInclude<ExtArgs> | null;
    where?: travel_agentWhereInput;
    orderBy?: travel_agentOrderByWithRelationInput | travel_agentOrderByWithRelationInput[];
    cursor?: travel_agentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Travel_agentScalarFieldEnum | Travel_agentScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AirlineScalarFieldEnum: {
    id: 'id';
    description: 'description';
    founded_at: 'founded_at';
    headquarters: 'headquarters';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type AirlineScalarFieldEnum = (typeof AirlineScalarFieldEnum)[keyof typeof AirlineScalarFieldEnum];

  export const BookingScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    flight_id: 'flight_id';
    booking_date: 'booking_date';
    seat_number: 'seat_number';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const Customer_serviceScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    airline_id: 'airline_id';
    service_hours: 'service_hours';
    service_phone: 'service_phone';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Customer_serviceScalarFieldEnum =
    (typeof Customer_serviceScalarFieldEnum)[keyof typeof Customer_serviceScalarFieldEnum];

  export const FlightScalarFieldEnum: {
    id: 'id';
    flight_number: 'flight_number';
    departure_airport: 'departure_airport';
    arrival_airport: 'arrival_airport';
    departure_time: 'departure_time';
    arrival_time: 'arrival_time';
    airline_id: 'airline_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FlightScalarFieldEnum = (typeof FlightScalarFieldEnum)[keyof typeof FlightScalarFieldEnum];

  export const Travel_agentScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    agency_name: 'agency_name';
    agency_address: 'agency_address';
    agency_phone: 'agency_phone';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Travel_agentScalarFieldEnum =
    (typeof Travel_agentScalarFieldEnum)[keyof typeof Travel_agentScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type airlineWhereInput = {
    AND?: airlineWhereInput | airlineWhereInput[];
    OR?: airlineWhereInput[];
    NOT?: airlineWhereInput | airlineWhereInput[];
    id?: UuidFilter<'airline'> | string;
    description?: StringNullableFilter<'airline'> | string | null;
    founded_at?: DateTimeNullableFilter<'airline'> | Date | string | null;
    headquarters?: StringNullableFilter<'airline'> | string | null;
    name?: StringFilter<'airline'> | string;
    created_at?: DateTimeFilter<'airline'> | Date | string;
    updated_at?: DateTimeFilter<'airline'> | Date | string;
    user_id?: UuidFilter<'airline'> | string;
    tenant_id?: StringFilter<'airline'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    customer_service?: Customer_serviceListRelationFilter;
    flight?: FlightListRelationFilter;
  };

  export type airlineOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    founded_at?: SortOrderInput | SortOrder;
    headquarters?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    customer_service?: customer_serviceOrderByRelationAggregateInput;
    flight?: flightOrderByRelationAggregateInput;
  };

  export type airlineWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: airlineWhereInput | airlineWhereInput[];
      OR?: airlineWhereInput[];
      NOT?: airlineWhereInput | airlineWhereInput[];
      description?: StringNullableFilter<'airline'> | string | null;
      founded_at?: DateTimeNullableFilter<'airline'> | Date | string | null;
      headquarters?: StringNullableFilter<'airline'> | string | null;
      name?: StringFilter<'airline'> | string;
      created_at?: DateTimeFilter<'airline'> | Date | string;
      updated_at?: DateTimeFilter<'airline'> | Date | string;
      user_id?: UuidFilter<'airline'> | string;
      tenant_id?: StringFilter<'airline'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      customer_service?: Customer_serviceListRelationFilter;
      flight?: FlightListRelationFilter;
    },
    'id'
  >;

  export type airlineOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    founded_at?: SortOrderInput | SortOrder;
    headquarters?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: airlineCountOrderByAggregateInput;
    _max?: airlineMaxOrderByAggregateInput;
    _min?: airlineMinOrderByAggregateInput;
  };

  export type airlineScalarWhereWithAggregatesInput = {
    AND?: airlineScalarWhereWithAggregatesInput | airlineScalarWhereWithAggregatesInput[];
    OR?: airlineScalarWhereWithAggregatesInput[];
    NOT?: airlineScalarWhereWithAggregatesInput | airlineScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'airline'> | string;
    description?: StringNullableWithAggregatesFilter<'airline'> | string | null;
    founded_at?: DateTimeNullableWithAggregatesFilter<'airline'> | Date | string | null;
    headquarters?: StringNullableWithAggregatesFilter<'airline'> | string | null;
    name?: StringWithAggregatesFilter<'airline'> | string;
    created_at?: DateTimeWithAggregatesFilter<'airline'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'airline'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'airline'> | string;
    tenant_id?: StringWithAggregatesFilter<'airline'> | string;
  };

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    flight_id?: UuidFilter<'booking'> | string;
    booking_date?: DateTimeFilter<'booking'> | Date | string;
    seat_number?: StringFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    flight?: XOR<FlightRelationFilter, flightWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    flight_id?: SortOrder;
    booking_date?: SortOrder;
    seat_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    flight?: flightOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      user_id?: UuidFilter<'booking'> | string;
      flight_id?: UuidFilter<'booking'> | string;
      booking_date?: DateTimeFilter<'booking'> | Date | string;
      seat_number?: StringFilter<'booking'> | string;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      flight?: XOR<FlightRelationFilter, flightWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    flight_id?: SortOrder;
    booking_date?: SortOrder;
    seat_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    user_id?: UuidWithAggregatesFilter<'booking'> | string;
    flight_id?: UuidWithAggregatesFilter<'booking'> | string;
    booking_date?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    seat_number?: StringWithAggregatesFilter<'booking'> | string;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type customer_serviceWhereInput = {
    AND?: customer_serviceWhereInput | customer_serviceWhereInput[];
    OR?: customer_serviceWhereInput[];
    NOT?: customer_serviceWhereInput | customer_serviceWhereInput[];
    id?: UuidFilter<'customer_service'> | string;
    user_id?: UuidFilter<'customer_service'> | string;
    airline_id?: UuidFilter<'customer_service'> | string;
    service_hours?: StringFilter<'customer_service'> | string;
    service_phone?: StringFilter<'customer_service'> | string;
    created_at?: DateTimeFilter<'customer_service'> | Date | string;
    updated_at?: DateTimeFilter<'customer_service'> | Date | string;
    airline?: XOR<AirlineRelationFilter, airlineWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customer_serviceOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    airline_id?: SortOrder;
    service_hours?: SortOrder;
    service_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    airline?: airlineOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type customer_serviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customer_serviceWhereInput | customer_serviceWhereInput[];
      OR?: customer_serviceWhereInput[];
      NOT?: customer_serviceWhereInput | customer_serviceWhereInput[];
      user_id?: UuidFilter<'customer_service'> | string;
      airline_id?: UuidFilter<'customer_service'> | string;
      service_hours?: StringFilter<'customer_service'> | string;
      service_phone?: StringFilter<'customer_service'> | string;
      created_at?: DateTimeFilter<'customer_service'> | Date | string;
      updated_at?: DateTimeFilter<'customer_service'> | Date | string;
      airline?: XOR<AirlineRelationFilter, airlineWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customer_serviceOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    airline_id?: SortOrder;
    service_hours?: SortOrder;
    service_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customer_serviceCountOrderByAggregateInput;
    _max?: customer_serviceMaxOrderByAggregateInput;
    _min?: customer_serviceMinOrderByAggregateInput;
  };

  export type customer_serviceScalarWhereWithAggregatesInput = {
    AND?: customer_serviceScalarWhereWithAggregatesInput | customer_serviceScalarWhereWithAggregatesInput[];
    OR?: customer_serviceScalarWhereWithAggregatesInput[];
    NOT?: customer_serviceScalarWhereWithAggregatesInput | customer_serviceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer_service'> | string;
    user_id?: UuidWithAggregatesFilter<'customer_service'> | string;
    airline_id?: UuidWithAggregatesFilter<'customer_service'> | string;
    service_hours?: StringWithAggregatesFilter<'customer_service'> | string;
    service_phone?: StringWithAggregatesFilter<'customer_service'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer_service'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer_service'> | Date | string;
  };

  export type flightWhereInput = {
    AND?: flightWhereInput | flightWhereInput[];
    OR?: flightWhereInput[];
    NOT?: flightWhereInput | flightWhereInput[];
    id?: UuidFilter<'flight'> | string;
    flight_number?: StringFilter<'flight'> | string;
    departure_airport?: StringFilter<'flight'> | string;
    arrival_airport?: StringFilter<'flight'> | string;
    departure_time?: DateTimeFilter<'flight'> | Date | string;
    arrival_time?: DateTimeFilter<'flight'> | Date | string;
    airline_id?: UuidFilter<'flight'> | string;
    created_at?: DateTimeFilter<'flight'> | Date | string;
    updated_at?: DateTimeFilter<'flight'> | Date | string;
    booking?: BookingListRelationFilter;
    airline?: XOR<AirlineRelationFilter, airlineWhereInput>;
  };

  export type flightOrderByWithRelationInput = {
    id?: SortOrder;
    flight_number?: SortOrder;
    departure_airport?: SortOrder;
    arrival_airport?: SortOrder;
    departure_time?: SortOrder;
    arrival_time?: SortOrder;
    airline_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    airline?: airlineOrderByWithRelationInput;
  };

  export type flightWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: flightWhereInput | flightWhereInput[];
      OR?: flightWhereInput[];
      NOT?: flightWhereInput | flightWhereInput[];
      flight_number?: StringFilter<'flight'> | string;
      departure_airport?: StringFilter<'flight'> | string;
      arrival_airport?: StringFilter<'flight'> | string;
      departure_time?: DateTimeFilter<'flight'> | Date | string;
      arrival_time?: DateTimeFilter<'flight'> | Date | string;
      airline_id?: UuidFilter<'flight'> | string;
      created_at?: DateTimeFilter<'flight'> | Date | string;
      updated_at?: DateTimeFilter<'flight'> | Date | string;
      booking?: BookingListRelationFilter;
      airline?: XOR<AirlineRelationFilter, airlineWhereInput>;
    },
    'id'
  >;

  export type flightOrderByWithAggregationInput = {
    id?: SortOrder;
    flight_number?: SortOrder;
    departure_airport?: SortOrder;
    arrival_airport?: SortOrder;
    departure_time?: SortOrder;
    arrival_time?: SortOrder;
    airline_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: flightCountOrderByAggregateInput;
    _max?: flightMaxOrderByAggregateInput;
    _min?: flightMinOrderByAggregateInput;
  };

  export type flightScalarWhereWithAggregatesInput = {
    AND?: flightScalarWhereWithAggregatesInput | flightScalarWhereWithAggregatesInput[];
    OR?: flightScalarWhereWithAggregatesInput[];
    NOT?: flightScalarWhereWithAggregatesInput | flightScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'flight'> | string;
    flight_number?: StringWithAggregatesFilter<'flight'> | string;
    departure_airport?: StringWithAggregatesFilter<'flight'> | string;
    arrival_airport?: StringWithAggregatesFilter<'flight'> | string;
    departure_time?: DateTimeWithAggregatesFilter<'flight'> | Date | string;
    arrival_time?: DateTimeWithAggregatesFilter<'flight'> | Date | string;
    airline_id?: UuidWithAggregatesFilter<'flight'> | string;
    created_at?: DateTimeWithAggregatesFilter<'flight'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'flight'> | Date | string;
  };

  export type travel_agentWhereInput = {
    AND?: travel_agentWhereInput | travel_agentWhereInput[];
    OR?: travel_agentWhereInput[];
    NOT?: travel_agentWhereInput | travel_agentWhereInput[];
    id?: UuidFilter<'travel_agent'> | string;
    user_id?: UuidFilter<'travel_agent'> | string;
    agency_name?: StringFilter<'travel_agent'> | string;
    agency_address?: StringFilter<'travel_agent'> | string;
    agency_phone?: StringFilter<'travel_agent'> | string;
    created_at?: DateTimeFilter<'travel_agent'> | Date | string;
    updated_at?: DateTimeFilter<'travel_agent'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type travel_agentOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    agency_name?: SortOrder;
    agency_address?: SortOrder;
    agency_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type travel_agentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: travel_agentWhereInput | travel_agentWhereInput[];
      OR?: travel_agentWhereInput[];
      NOT?: travel_agentWhereInput | travel_agentWhereInput[];
      user_id?: UuidFilter<'travel_agent'> | string;
      agency_name?: StringFilter<'travel_agent'> | string;
      agency_address?: StringFilter<'travel_agent'> | string;
      agency_phone?: StringFilter<'travel_agent'> | string;
      created_at?: DateTimeFilter<'travel_agent'> | Date | string;
      updated_at?: DateTimeFilter<'travel_agent'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type travel_agentOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    agency_name?: SortOrder;
    agency_address?: SortOrder;
    agency_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: travel_agentCountOrderByAggregateInput;
    _max?: travel_agentMaxOrderByAggregateInput;
    _min?: travel_agentMinOrderByAggregateInput;
  };

  export type travel_agentScalarWhereWithAggregatesInput = {
    AND?: travel_agentScalarWhereWithAggregatesInput | travel_agentScalarWhereWithAggregatesInput[];
    OR?: travel_agentScalarWhereWithAggregatesInput[];
    NOT?: travel_agentScalarWhereWithAggregatesInput | travel_agentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'travel_agent'> | string;
    user_id?: UuidWithAggregatesFilter<'travel_agent'> | string;
    agency_name?: StringWithAggregatesFilter<'travel_agent'> | string;
    agency_address?: StringWithAggregatesFilter<'travel_agent'> | string;
    agency_phone?: StringWithAggregatesFilter<'travel_agent'> | string;
    created_at?: DateTimeWithAggregatesFilter<'travel_agent'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'travel_agent'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    airline?: AirlineListRelationFilter;
    booking?: BookingListRelationFilter;
    customer_service?: Customer_serviceListRelationFilter;
    travel_agent?: Travel_agentListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    airline?: airlineOrderByRelationAggregateInput;
    booking?: bookingOrderByRelationAggregateInput;
    customer_service?: customer_serviceOrderByRelationAggregateInput;
    travel_agent?: travel_agentOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      airline?: AirlineListRelationFilter;
      booking?: BookingListRelationFilter;
      customer_service?: Customer_serviceListRelationFilter;
      travel_agent?: Travel_agentListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type airlineCreateInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutAirlineInput;
    customer_service?: customer_serviceCreateNestedManyWithoutAirlineInput;
    flight?: flightCreateNestedManyWithoutAirlineInput;
  };

  export type airlineUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutAirlineInput;
    flight?: flightUncheckedCreateNestedManyWithoutAirlineInput;
  };

  export type airlineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutAirlineNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutAirlineNestedInput;
    flight?: flightUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutAirlineNestedInput;
    flight?: flightUncheckedUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineCreateManyInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type airlineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type airlineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type bookingCreateInput = {
    id?: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    flight: flightCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    user_id: string;
    flight_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    flight?: flightUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    flight_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyInput = {
    id?: string;
    user_id: string;
    flight_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    flight_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceCreateInput = {
    id?: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline: airlineCreateNestedOneWithoutCustomer_serviceInput;
    user: userCreateNestedOneWithoutCustomer_serviceInput;
  };

  export type customer_serviceUncheckedCreateInput = {
    id?: string;
    user_id: string;
    airline_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateOneRequiredWithoutCustomer_serviceNestedInput;
    user?: userUpdateOneRequiredWithoutCustomer_serviceNestedInput;
  };

  export type customer_serviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceCreateManyInput = {
    id?: string;
    user_id: string;
    airline_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type flightCreateInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutFlightInput;
    airline: airlineCreateNestedOneWithoutFlightInput;
  };

  export type flightUncheckedCreateInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    airline_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutFlightInput;
  };

  export type flightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutFlightNestedInput;
    airline?: airlineUpdateOneRequiredWithoutFlightNestedInput;
  };

  export type flightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutFlightNestedInput;
  };

  export type flightCreateManyInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    airline_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type flightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type flightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentCreateInput = {
    id?: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTravel_agentInput;
  };

  export type travel_agentUncheckedCreateInput = {
    id?: string;
    user_id: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type travel_agentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTravel_agentNestedInput;
  };

  export type travel_agentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentCreateManyInput = {
    id?: string;
    user_id: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type travel_agentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineCreateNestedManyWithoutUserInput;
    booking?: bookingCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineUncheckedCreateNestedManyWithoutUserInput;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateManyWithoutUserNestedInput;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUncheckedUpdateManyWithoutUserNestedInput;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Customer_serviceListRelationFilter = {
    every?: customer_serviceWhereInput;
    some?: customer_serviceWhereInput;
    none?: customer_serviceWhereInput;
  };

  export type FlightListRelationFilter = {
    every?: flightWhereInput;
    some?: flightWhereInput;
    none?: flightWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type customer_serviceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type flightOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type airlineCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    founded_at?: SortOrder;
    headquarters?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type airlineMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    founded_at?: SortOrder;
    headquarters?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type airlineMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    founded_at?: SortOrder;
    headquarters?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FlightRelationFilter = {
    is?: flightWhereInput;
    isNot?: flightWhereInput;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    flight_id?: SortOrder;
    booking_date?: SortOrder;
    seat_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    flight_id?: SortOrder;
    booking_date?: SortOrder;
    seat_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    flight_id?: SortOrder;
    booking_date?: SortOrder;
    seat_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AirlineRelationFilter = {
    is?: airlineWhereInput;
    isNot?: airlineWhereInput;
  };

  export type customer_serviceCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    airline_id?: SortOrder;
    service_hours?: SortOrder;
    service_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customer_serviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    airline_id?: SortOrder;
    service_hours?: SortOrder;
    service_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customer_serviceMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    airline_id?: SortOrder;
    service_hours?: SortOrder;
    service_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type flightCountOrderByAggregateInput = {
    id?: SortOrder;
    flight_number?: SortOrder;
    departure_airport?: SortOrder;
    arrival_airport?: SortOrder;
    departure_time?: SortOrder;
    arrival_time?: SortOrder;
    airline_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type flightMaxOrderByAggregateInput = {
    id?: SortOrder;
    flight_number?: SortOrder;
    departure_airport?: SortOrder;
    arrival_airport?: SortOrder;
    departure_time?: SortOrder;
    arrival_time?: SortOrder;
    airline_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type flightMinOrderByAggregateInput = {
    id?: SortOrder;
    flight_number?: SortOrder;
    departure_airport?: SortOrder;
    arrival_airport?: SortOrder;
    departure_time?: SortOrder;
    arrival_time?: SortOrder;
    airline_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type travel_agentCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    agency_name?: SortOrder;
    agency_address?: SortOrder;
    agency_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type travel_agentMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    agency_name?: SortOrder;
    agency_address?: SortOrder;
    agency_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type travel_agentMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    agency_name?: SortOrder;
    agency_address?: SortOrder;
    agency_phone?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AirlineListRelationFilter = {
    every?: airlineWhereInput;
    some?: airlineWhereInput;
    none?: airlineWhereInput;
  };

  export type Travel_agentListRelationFilter = {
    every?: travel_agentWhereInput;
    some?: travel_agentWhereInput;
    none?: travel_agentWhereInput;
  };

  export type airlineOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type travel_agentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutAirlineInput = {
    create?: XOR<userCreateWithoutAirlineInput, userUncheckedCreateWithoutAirlineInput>;
    connectOrCreate?: userCreateOrConnectWithoutAirlineInput;
    connect?: userWhereUniqueInput;
  };

  export type customer_serviceCreateNestedManyWithoutAirlineInput = {
    create?:
      | XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>
      | customer_serviceCreateWithoutAirlineInput[]
      | customer_serviceUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutAirlineInput
      | customer_serviceCreateOrConnectWithoutAirlineInput[];
    createMany?: customer_serviceCreateManyAirlineInputEnvelope;
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
  };

  export type flightCreateNestedManyWithoutAirlineInput = {
    create?:
      | XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>
      | flightCreateWithoutAirlineInput[]
      | flightUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?: flightCreateOrConnectWithoutAirlineInput | flightCreateOrConnectWithoutAirlineInput[];
    createMany?: flightCreateManyAirlineInputEnvelope;
    connect?: flightWhereUniqueInput | flightWhereUniqueInput[];
  };

  export type customer_serviceUncheckedCreateNestedManyWithoutAirlineInput = {
    create?:
      | XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>
      | customer_serviceCreateWithoutAirlineInput[]
      | customer_serviceUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutAirlineInput
      | customer_serviceCreateOrConnectWithoutAirlineInput[];
    createMany?: customer_serviceCreateManyAirlineInputEnvelope;
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
  };

  export type flightUncheckedCreateNestedManyWithoutAirlineInput = {
    create?:
      | XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>
      | flightCreateWithoutAirlineInput[]
      | flightUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?: flightCreateOrConnectWithoutAirlineInput | flightCreateOrConnectWithoutAirlineInput[];
    createMany?: flightCreateManyAirlineInputEnvelope;
    connect?: flightWhereUniqueInput | flightWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutAirlineNestedInput = {
    create?: XOR<userCreateWithoutAirlineInput, userUncheckedCreateWithoutAirlineInput>;
    connectOrCreate?: userCreateOrConnectWithoutAirlineInput;
    upsert?: userUpsertWithoutAirlineInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAirlineInput, userUpdateWithoutAirlineInput>,
      userUncheckedUpdateWithoutAirlineInput
    >;
  };

  export type customer_serviceUpdateManyWithoutAirlineNestedInput = {
    create?:
      | XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>
      | customer_serviceCreateWithoutAirlineInput[]
      | customer_serviceUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutAirlineInput
      | customer_serviceCreateOrConnectWithoutAirlineInput[];
    upsert?:
      | customer_serviceUpsertWithWhereUniqueWithoutAirlineInput
      | customer_serviceUpsertWithWhereUniqueWithoutAirlineInput[];
    createMany?: customer_serviceCreateManyAirlineInputEnvelope;
    set?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    disconnect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    delete?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    update?:
      | customer_serviceUpdateWithWhereUniqueWithoutAirlineInput
      | customer_serviceUpdateWithWhereUniqueWithoutAirlineInput[];
    updateMany?:
      | customer_serviceUpdateManyWithWhereWithoutAirlineInput
      | customer_serviceUpdateManyWithWhereWithoutAirlineInput[];
    deleteMany?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
  };

  export type flightUpdateManyWithoutAirlineNestedInput = {
    create?:
      | XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>
      | flightCreateWithoutAirlineInput[]
      | flightUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?: flightCreateOrConnectWithoutAirlineInput | flightCreateOrConnectWithoutAirlineInput[];
    upsert?: flightUpsertWithWhereUniqueWithoutAirlineInput | flightUpsertWithWhereUniqueWithoutAirlineInput[];
    createMany?: flightCreateManyAirlineInputEnvelope;
    set?: flightWhereUniqueInput | flightWhereUniqueInput[];
    disconnect?: flightWhereUniqueInput | flightWhereUniqueInput[];
    delete?: flightWhereUniqueInput | flightWhereUniqueInput[];
    connect?: flightWhereUniqueInput | flightWhereUniqueInput[];
    update?: flightUpdateWithWhereUniqueWithoutAirlineInput | flightUpdateWithWhereUniqueWithoutAirlineInput[];
    updateMany?: flightUpdateManyWithWhereWithoutAirlineInput | flightUpdateManyWithWhereWithoutAirlineInput[];
    deleteMany?: flightScalarWhereInput | flightScalarWhereInput[];
  };

  export type customer_serviceUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?:
      | XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>
      | customer_serviceCreateWithoutAirlineInput[]
      | customer_serviceUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutAirlineInput
      | customer_serviceCreateOrConnectWithoutAirlineInput[];
    upsert?:
      | customer_serviceUpsertWithWhereUniqueWithoutAirlineInput
      | customer_serviceUpsertWithWhereUniqueWithoutAirlineInput[];
    createMany?: customer_serviceCreateManyAirlineInputEnvelope;
    set?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    disconnect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    delete?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    update?:
      | customer_serviceUpdateWithWhereUniqueWithoutAirlineInput
      | customer_serviceUpdateWithWhereUniqueWithoutAirlineInput[];
    updateMany?:
      | customer_serviceUpdateManyWithWhereWithoutAirlineInput
      | customer_serviceUpdateManyWithWhereWithoutAirlineInput[];
    deleteMany?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
  };

  export type flightUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?:
      | XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>
      | flightCreateWithoutAirlineInput[]
      | flightUncheckedCreateWithoutAirlineInput[];
    connectOrCreate?: flightCreateOrConnectWithoutAirlineInput | flightCreateOrConnectWithoutAirlineInput[];
    upsert?: flightUpsertWithWhereUniqueWithoutAirlineInput | flightUpsertWithWhereUniqueWithoutAirlineInput[];
    createMany?: flightCreateManyAirlineInputEnvelope;
    set?: flightWhereUniqueInput | flightWhereUniqueInput[];
    disconnect?: flightWhereUniqueInput | flightWhereUniqueInput[];
    delete?: flightWhereUniqueInput | flightWhereUniqueInput[];
    connect?: flightWhereUniqueInput | flightWhereUniqueInput[];
    update?: flightUpdateWithWhereUniqueWithoutAirlineInput | flightUpdateWithWhereUniqueWithoutAirlineInput[];
    updateMany?: flightUpdateManyWithWhereWithoutAirlineInput | flightUpdateManyWithWhereWithoutAirlineInput[];
    deleteMany?: flightScalarWhereInput | flightScalarWhereInput[];
  };

  export type flightCreateNestedOneWithoutBookingInput = {
    create?: XOR<flightCreateWithoutBookingInput, flightUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: flightCreateOrConnectWithoutBookingInput;
    connect?: flightWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    connect?: userWhereUniqueInput;
  };

  export type flightUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<flightCreateWithoutBookingInput, flightUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: flightCreateOrConnectWithoutBookingInput;
    upsert?: flightUpsertWithoutBookingInput;
    connect?: flightWhereUniqueInput;
    update?: XOR<
      XOR<flightUpdateToOneWithWhereWithoutBookingInput, flightUpdateWithoutBookingInput>,
      flightUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    upsert?: userUpsertWithoutBookingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>,
      userUncheckedUpdateWithoutBookingInput
    >;
  };

  export type airlineCreateNestedOneWithoutCustomer_serviceInput = {
    create?: XOR<airlineCreateWithoutCustomer_serviceInput, airlineUncheckedCreateWithoutCustomer_serviceInput>;
    connectOrCreate?: airlineCreateOrConnectWithoutCustomer_serviceInput;
    connect?: airlineWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCustomer_serviceInput = {
    create?: XOR<userCreateWithoutCustomer_serviceInput, userUncheckedCreateWithoutCustomer_serviceInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomer_serviceInput;
    connect?: userWhereUniqueInput;
  };

  export type airlineUpdateOneRequiredWithoutCustomer_serviceNestedInput = {
    create?: XOR<airlineCreateWithoutCustomer_serviceInput, airlineUncheckedCreateWithoutCustomer_serviceInput>;
    connectOrCreate?: airlineCreateOrConnectWithoutCustomer_serviceInput;
    upsert?: airlineUpsertWithoutCustomer_serviceInput;
    connect?: airlineWhereUniqueInput;
    update?: XOR<
      XOR<airlineUpdateToOneWithWhereWithoutCustomer_serviceInput, airlineUpdateWithoutCustomer_serviceInput>,
      airlineUncheckedUpdateWithoutCustomer_serviceInput
    >;
  };

  export type userUpdateOneRequiredWithoutCustomer_serviceNestedInput = {
    create?: XOR<userCreateWithoutCustomer_serviceInput, userUncheckedCreateWithoutCustomer_serviceInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomer_serviceInput;
    upsert?: userUpsertWithoutCustomer_serviceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomer_serviceInput, userUpdateWithoutCustomer_serviceInput>,
      userUncheckedUpdateWithoutCustomer_serviceInput
    >;
  };

  export type bookingCreateNestedManyWithoutFlightInput = {
    create?:
      | XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>
      | bookingCreateWithoutFlightInput[]
      | bookingUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutFlightInput | bookingCreateOrConnectWithoutFlightInput[];
    createMany?: bookingCreateManyFlightInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type airlineCreateNestedOneWithoutFlightInput = {
    create?: XOR<airlineCreateWithoutFlightInput, airlineUncheckedCreateWithoutFlightInput>;
    connectOrCreate?: airlineCreateOrConnectWithoutFlightInput;
    connect?: airlineWhereUniqueInput;
  };

  export type bookingUncheckedCreateNestedManyWithoutFlightInput = {
    create?:
      | XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>
      | bookingCreateWithoutFlightInput[]
      | bookingUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutFlightInput | bookingCreateOrConnectWithoutFlightInput[];
    createMany?: bookingCreateManyFlightInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutFlightNestedInput = {
    create?:
      | XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>
      | bookingCreateWithoutFlightInput[]
      | bookingUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutFlightInput | bookingCreateOrConnectWithoutFlightInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutFlightInput | bookingUpsertWithWhereUniqueWithoutFlightInput[];
    createMany?: bookingCreateManyFlightInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutFlightInput | bookingUpdateWithWhereUniqueWithoutFlightInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutFlightInput | bookingUpdateManyWithWhereWithoutFlightInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type airlineUpdateOneRequiredWithoutFlightNestedInput = {
    create?: XOR<airlineCreateWithoutFlightInput, airlineUncheckedCreateWithoutFlightInput>;
    connectOrCreate?: airlineCreateOrConnectWithoutFlightInput;
    upsert?: airlineUpsertWithoutFlightInput;
    connect?: airlineWhereUniqueInput;
    update?: XOR<
      XOR<airlineUpdateToOneWithWhereWithoutFlightInput, airlineUpdateWithoutFlightInput>,
      airlineUncheckedUpdateWithoutFlightInput
    >;
  };

  export type bookingUncheckedUpdateManyWithoutFlightNestedInput = {
    create?:
      | XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>
      | bookingCreateWithoutFlightInput[]
      | bookingUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutFlightInput | bookingCreateOrConnectWithoutFlightInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutFlightInput | bookingUpsertWithWhereUniqueWithoutFlightInput[];
    createMany?: bookingCreateManyFlightInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutFlightInput | bookingUpdateWithWhereUniqueWithoutFlightInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutFlightInput | bookingUpdateManyWithWhereWithoutFlightInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutTravel_agentInput = {
    create?: XOR<userCreateWithoutTravel_agentInput, userUncheckedCreateWithoutTravel_agentInput>;
    connectOrCreate?: userCreateOrConnectWithoutTravel_agentInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutTravel_agentNestedInput = {
    create?: XOR<userCreateWithoutTravel_agentInput, userUncheckedCreateWithoutTravel_agentInput>;
    connectOrCreate?: userCreateOrConnectWithoutTravel_agentInput;
    upsert?: userUpsertWithoutTravel_agentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTravel_agentInput, userUpdateWithoutTravel_agentInput>,
      userUncheckedUpdateWithoutTravel_agentInput
    >;
  };

  export type airlineCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>
      | airlineCreateWithoutUserInput[]
      | airlineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: airlineCreateOrConnectWithoutUserInput | airlineCreateOrConnectWithoutUserInput[];
    createMany?: airlineCreateManyUserInputEnvelope;
    connect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
  };

  export type bookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type customer_serviceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>
      | customer_serviceCreateWithoutUserInput[]
      | customer_serviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutUserInput
      | customer_serviceCreateOrConnectWithoutUserInput[];
    createMany?: customer_serviceCreateManyUserInputEnvelope;
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
  };

  export type travel_agentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>
      | travel_agentCreateWithoutUserInput[]
      | travel_agentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: travel_agentCreateOrConnectWithoutUserInput | travel_agentCreateOrConnectWithoutUserInput[];
    createMany?: travel_agentCreateManyUserInputEnvelope;
    connect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
  };

  export type airlineUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>
      | airlineCreateWithoutUserInput[]
      | airlineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: airlineCreateOrConnectWithoutUserInput | airlineCreateOrConnectWithoutUserInput[];
    createMany?: airlineCreateManyUserInputEnvelope;
    connect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type customer_serviceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>
      | customer_serviceCreateWithoutUserInput[]
      | customer_serviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutUserInput
      | customer_serviceCreateOrConnectWithoutUserInput[];
    createMany?: customer_serviceCreateManyUserInputEnvelope;
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
  };

  export type travel_agentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>
      | travel_agentCreateWithoutUserInput[]
      | travel_agentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: travel_agentCreateOrConnectWithoutUserInput | travel_agentCreateOrConnectWithoutUserInput[];
    createMany?: travel_agentCreateManyUserInputEnvelope;
    connect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
  };

  export type airlineUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>
      | airlineCreateWithoutUserInput[]
      | airlineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: airlineCreateOrConnectWithoutUserInput | airlineCreateOrConnectWithoutUserInput[];
    upsert?: airlineUpsertWithWhereUniqueWithoutUserInput | airlineUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: airlineCreateManyUserInputEnvelope;
    set?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    disconnect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    delete?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    connect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    update?: airlineUpdateWithWhereUniqueWithoutUserInput | airlineUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: airlineUpdateManyWithWhereWithoutUserInput | airlineUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: airlineScalarWhereInput | airlineScalarWhereInput[];
  };

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type customer_serviceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>
      | customer_serviceCreateWithoutUserInput[]
      | customer_serviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutUserInput
      | customer_serviceCreateOrConnectWithoutUserInput[];
    upsert?:
      | customer_serviceUpsertWithWhereUniqueWithoutUserInput
      | customer_serviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customer_serviceCreateManyUserInputEnvelope;
    set?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    disconnect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    delete?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    update?:
      | customer_serviceUpdateWithWhereUniqueWithoutUserInput
      | customer_serviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | customer_serviceUpdateManyWithWhereWithoutUserInput
      | customer_serviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
  };

  export type travel_agentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>
      | travel_agentCreateWithoutUserInput[]
      | travel_agentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: travel_agentCreateOrConnectWithoutUserInput | travel_agentCreateOrConnectWithoutUserInput[];
    upsert?: travel_agentUpsertWithWhereUniqueWithoutUserInput | travel_agentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: travel_agentCreateManyUserInputEnvelope;
    set?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    disconnect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    delete?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    connect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    update?: travel_agentUpdateWithWhereUniqueWithoutUserInput | travel_agentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: travel_agentUpdateManyWithWhereWithoutUserInput | travel_agentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: travel_agentScalarWhereInput | travel_agentScalarWhereInput[];
  };

  export type airlineUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>
      | airlineCreateWithoutUserInput[]
      | airlineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: airlineCreateOrConnectWithoutUserInput | airlineCreateOrConnectWithoutUserInput[];
    upsert?: airlineUpsertWithWhereUniqueWithoutUserInput | airlineUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: airlineCreateManyUserInputEnvelope;
    set?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    disconnect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    delete?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    connect?: airlineWhereUniqueInput | airlineWhereUniqueInput[];
    update?: airlineUpdateWithWhereUniqueWithoutUserInput | airlineUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: airlineUpdateManyWithWhereWithoutUserInput | airlineUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: airlineScalarWhereInput | airlineScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type customer_serviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>
      | customer_serviceCreateWithoutUserInput[]
      | customer_serviceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | customer_serviceCreateOrConnectWithoutUserInput
      | customer_serviceCreateOrConnectWithoutUserInput[];
    upsert?:
      | customer_serviceUpsertWithWhereUniqueWithoutUserInput
      | customer_serviceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customer_serviceCreateManyUserInputEnvelope;
    set?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    disconnect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    delete?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    connect?: customer_serviceWhereUniqueInput | customer_serviceWhereUniqueInput[];
    update?:
      | customer_serviceUpdateWithWhereUniqueWithoutUserInput
      | customer_serviceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | customer_serviceUpdateManyWithWhereWithoutUserInput
      | customer_serviceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
  };

  export type travel_agentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>
      | travel_agentCreateWithoutUserInput[]
      | travel_agentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: travel_agentCreateOrConnectWithoutUserInput | travel_agentCreateOrConnectWithoutUserInput[];
    upsert?: travel_agentUpsertWithWhereUniqueWithoutUserInput | travel_agentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: travel_agentCreateManyUserInputEnvelope;
    set?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    disconnect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    delete?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    connect?: travel_agentWhereUniqueInput | travel_agentWhereUniqueInput[];
    update?: travel_agentUpdateWithWhereUniqueWithoutUserInput | travel_agentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: travel_agentUpdateManyWithWhereWithoutUserInput | travel_agentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: travel_agentScalarWhereInput | travel_agentScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type userCreateWithoutAirlineInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAirlineInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAirlineInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAirlineInput, userUncheckedCreateWithoutAirlineInput>;
  };

  export type customer_serviceCreateWithoutAirlineInput = {
    id?: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomer_serviceInput;
  };

  export type customer_serviceUncheckedCreateWithoutAirlineInput = {
    id?: string;
    user_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceCreateOrConnectWithoutAirlineInput = {
    where: customer_serviceWhereUniqueInput;
    create: XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>;
  };

  export type customer_serviceCreateManyAirlineInputEnvelope = {
    data: customer_serviceCreateManyAirlineInput | customer_serviceCreateManyAirlineInput[];
    skipDuplicates?: boolean;
  };

  export type flightCreateWithoutAirlineInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutFlightInput;
  };

  export type flightUncheckedCreateWithoutAirlineInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutFlightInput;
  };

  export type flightCreateOrConnectWithoutAirlineInput = {
    where: flightWhereUniqueInput;
    create: XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>;
  };

  export type flightCreateManyAirlineInputEnvelope = {
    data: flightCreateManyAirlineInput | flightCreateManyAirlineInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutAirlineInput = {
    update: XOR<userUpdateWithoutAirlineInput, userUncheckedUpdateWithoutAirlineInput>;
    create: XOR<userCreateWithoutAirlineInput, userUncheckedCreateWithoutAirlineInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAirlineInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAirlineInput, userUncheckedUpdateWithoutAirlineInput>;
  };

  export type userUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customer_serviceUpsertWithWhereUniqueWithoutAirlineInput = {
    where: customer_serviceWhereUniqueInput;
    update: XOR<customer_serviceUpdateWithoutAirlineInput, customer_serviceUncheckedUpdateWithoutAirlineInput>;
    create: XOR<customer_serviceCreateWithoutAirlineInput, customer_serviceUncheckedCreateWithoutAirlineInput>;
  };

  export type customer_serviceUpdateWithWhereUniqueWithoutAirlineInput = {
    where: customer_serviceWhereUniqueInput;
    data: XOR<customer_serviceUpdateWithoutAirlineInput, customer_serviceUncheckedUpdateWithoutAirlineInput>;
  };

  export type customer_serviceUpdateManyWithWhereWithoutAirlineInput = {
    where: customer_serviceScalarWhereInput;
    data: XOR<customer_serviceUpdateManyMutationInput, customer_serviceUncheckedUpdateManyWithoutAirlineInput>;
  };

  export type customer_serviceScalarWhereInput = {
    AND?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
    OR?: customer_serviceScalarWhereInput[];
    NOT?: customer_serviceScalarWhereInput | customer_serviceScalarWhereInput[];
    id?: UuidFilter<'customer_service'> | string;
    user_id?: UuidFilter<'customer_service'> | string;
    airline_id?: UuidFilter<'customer_service'> | string;
    service_hours?: StringFilter<'customer_service'> | string;
    service_phone?: StringFilter<'customer_service'> | string;
    created_at?: DateTimeFilter<'customer_service'> | Date | string;
    updated_at?: DateTimeFilter<'customer_service'> | Date | string;
  };

  export type flightUpsertWithWhereUniqueWithoutAirlineInput = {
    where: flightWhereUniqueInput;
    update: XOR<flightUpdateWithoutAirlineInput, flightUncheckedUpdateWithoutAirlineInput>;
    create: XOR<flightCreateWithoutAirlineInput, flightUncheckedCreateWithoutAirlineInput>;
  };

  export type flightUpdateWithWhereUniqueWithoutAirlineInput = {
    where: flightWhereUniqueInput;
    data: XOR<flightUpdateWithoutAirlineInput, flightUncheckedUpdateWithoutAirlineInput>;
  };

  export type flightUpdateManyWithWhereWithoutAirlineInput = {
    where: flightScalarWhereInput;
    data: XOR<flightUpdateManyMutationInput, flightUncheckedUpdateManyWithoutAirlineInput>;
  };

  export type flightScalarWhereInput = {
    AND?: flightScalarWhereInput | flightScalarWhereInput[];
    OR?: flightScalarWhereInput[];
    NOT?: flightScalarWhereInput | flightScalarWhereInput[];
    id?: UuidFilter<'flight'> | string;
    flight_number?: StringFilter<'flight'> | string;
    departure_airport?: StringFilter<'flight'> | string;
    arrival_airport?: StringFilter<'flight'> | string;
    departure_time?: DateTimeFilter<'flight'> | Date | string;
    arrival_time?: DateTimeFilter<'flight'> | Date | string;
    airline_id?: UuidFilter<'flight'> | string;
    created_at?: DateTimeFilter<'flight'> | Date | string;
    updated_at?: DateTimeFilter<'flight'> | Date | string;
  };

  export type flightCreateWithoutBookingInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline: airlineCreateNestedOneWithoutFlightInput;
  };

  export type flightUncheckedCreateWithoutBookingInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    airline_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type flightCreateOrConnectWithoutBookingInput = {
    where: flightWhereUniqueInput;
    create: XOR<flightCreateWithoutBookingInput, flightUncheckedCreateWithoutBookingInput>;
  };

  export type userCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineUncheckedCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
  };

  export type flightUpsertWithoutBookingInput = {
    update: XOR<flightUpdateWithoutBookingInput, flightUncheckedUpdateWithoutBookingInput>;
    create: XOR<flightCreateWithoutBookingInput, flightUncheckedCreateWithoutBookingInput>;
    where?: flightWhereInput;
  };

  export type flightUpdateToOneWithWhereWithoutBookingInput = {
    where?: flightWhereInput;
    data: XOR<flightUpdateWithoutBookingInput, flightUncheckedUpdateWithoutBookingInput>;
  };

  export type flightUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateOneRequiredWithoutFlightNestedInput;
  };

  export type flightUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
  };

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUncheckedUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type airlineCreateWithoutCustomer_serviceInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutAirlineInput;
    flight?: flightCreateNestedManyWithoutAirlineInput;
  };

  export type airlineUncheckedCreateWithoutCustomer_serviceInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    flight?: flightUncheckedCreateNestedManyWithoutAirlineInput;
  };

  export type airlineCreateOrConnectWithoutCustomer_serviceInput = {
    where: airlineWhereUniqueInput;
    create: XOR<airlineCreateWithoutCustomer_serviceInput, airlineUncheckedCreateWithoutCustomer_serviceInput>;
  };

  export type userCreateWithoutCustomer_serviceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineCreateNestedManyWithoutUserInput;
    booking?: bookingCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomer_serviceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineUncheckedCreateNestedManyWithoutUserInput;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    travel_agent?: travel_agentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomer_serviceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomer_serviceInput, userUncheckedCreateWithoutCustomer_serviceInput>;
  };

  export type airlineUpsertWithoutCustomer_serviceInput = {
    update: XOR<airlineUpdateWithoutCustomer_serviceInput, airlineUncheckedUpdateWithoutCustomer_serviceInput>;
    create: XOR<airlineCreateWithoutCustomer_serviceInput, airlineUncheckedCreateWithoutCustomer_serviceInput>;
    where?: airlineWhereInput;
  };

  export type airlineUpdateToOneWithWhereWithoutCustomer_serviceInput = {
    where?: airlineWhereInput;
    data: XOR<airlineUpdateWithoutCustomer_serviceInput, airlineUncheckedUpdateWithoutCustomer_serviceInput>;
  };

  export type airlineUpdateWithoutCustomer_serviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutAirlineNestedInput;
    flight?: flightUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineUncheckedUpdateWithoutCustomer_serviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    flight?: flightUncheckedUpdateManyWithoutAirlineNestedInput;
  };

  export type userUpsertWithoutCustomer_serviceInput = {
    update: XOR<userUpdateWithoutCustomer_serviceInput, userUncheckedUpdateWithoutCustomer_serviceInput>;
    create: XOR<userCreateWithoutCustomer_serviceInput, userUncheckedCreateWithoutCustomer_serviceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomer_serviceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomer_serviceInput, userUncheckedUpdateWithoutCustomer_serviceInput>;
  };

  export type userUpdateWithoutCustomer_serviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateManyWithoutUserNestedInput;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomer_serviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUncheckedUpdateManyWithoutUserNestedInput;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    travel_agent?: travel_agentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutFlightInput = {
    id?: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutFlightInput = {
    id?: string;
    user_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutFlightInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>;
  };

  export type bookingCreateManyFlightInputEnvelope = {
    data: bookingCreateManyFlightInput | bookingCreateManyFlightInput[];
    skipDuplicates?: boolean;
  };

  export type airlineCreateWithoutFlightInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutAirlineInput;
    customer_service?: customer_serviceCreateNestedManyWithoutAirlineInput;
  };

  export type airlineUncheckedCreateWithoutFlightInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutAirlineInput;
  };

  export type airlineCreateOrConnectWithoutFlightInput = {
    where: airlineWhereUniqueInput;
    create: XOR<airlineCreateWithoutFlightInput, airlineUncheckedCreateWithoutFlightInput>;
  };

  export type bookingUpsertWithWhereUniqueWithoutFlightInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutFlightInput, bookingUncheckedUpdateWithoutFlightInput>;
    create: XOR<bookingCreateWithoutFlightInput, bookingUncheckedCreateWithoutFlightInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutFlightInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutFlightInput, bookingUncheckedUpdateWithoutFlightInput>;
  };

  export type bookingUpdateManyWithWhereWithoutFlightInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutFlightInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    flight_id?: UuidFilter<'booking'> | string;
    booking_date?: DateTimeFilter<'booking'> | Date | string;
    seat_number?: StringFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type airlineUpsertWithoutFlightInput = {
    update: XOR<airlineUpdateWithoutFlightInput, airlineUncheckedUpdateWithoutFlightInput>;
    create: XOR<airlineCreateWithoutFlightInput, airlineUncheckedCreateWithoutFlightInput>;
    where?: airlineWhereInput;
  };

  export type airlineUpdateToOneWithWhereWithoutFlightInput = {
    where?: airlineWhereInput;
    data: XOR<airlineUpdateWithoutFlightInput, airlineUncheckedUpdateWithoutFlightInput>;
  };

  export type airlineUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutAirlineNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutAirlineNestedInput;
  };

  export type userCreateWithoutTravel_agentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineCreateNestedManyWithoutUserInput;
    booking?: bookingCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTravel_agentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline?: airlineUncheckedCreateNestedManyWithoutUserInput;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTravel_agentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTravel_agentInput, userUncheckedCreateWithoutTravel_agentInput>;
  };

  export type userUpsertWithoutTravel_agentInput = {
    update: XOR<userUpdateWithoutTravel_agentInput, userUncheckedUpdateWithoutTravel_agentInput>;
    create: XOR<userCreateWithoutTravel_agentInput, userUncheckedCreateWithoutTravel_agentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTravel_agentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTravel_agentInput, userUncheckedUpdateWithoutTravel_agentInput>;
  };

  export type userUpdateWithoutTravel_agentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateManyWithoutUserNestedInput;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTravel_agentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUncheckedUpdateManyWithoutUserNestedInput;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type airlineCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer_service?: customer_serviceCreateNestedManyWithoutAirlineInput;
    flight?: flightCreateNestedManyWithoutAirlineInput;
  };

  export type airlineUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    customer_service?: customer_serviceUncheckedCreateNestedManyWithoutAirlineInput;
    flight?: flightUncheckedCreateNestedManyWithoutAirlineInput;
  };

  export type airlineCreateOrConnectWithoutUserInput = {
    where: airlineWhereUniqueInput;
    create: XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>;
  };

  export type airlineCreateManyUserInputEnvelope = {
    data: airlineCreateManyUserInput | airlineCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingCreateWithoutUserInput = {
    id?: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    flight: flightCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string;
    flight_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customer_serviceCreateWithoutUserInput = {
    id?: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    airline: airlineCreateNestedOneWithoutCustomer_serviceInput;
  };

  export type customer_serviceUncheckedCreateWithoutUserInput = {
    id?: string;
    airline_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceCreateOrConnectWithoutUserInput = {
    where: customer_serviceWhereUniqueInput;
    create: XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>;
  };

  export type customer_serviceCreateManyUserInputEnvelope = {
    data: customer_serviceCreateManyUserInput | customer_serviceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type travel_agentCreateWithoutUserInput = {
    id?: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type travel_agentUncheckedCreateWithoutUserInput = {
    id?: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type travel_agentCreateOrConnectWithoutUserInput = {
    where: travel_agentWhereUniqueInput;
    create: XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>;
  };

  export type travel_agentCreateManyUserInputEnvelope = {
    data: travel_agentCreateManyUserInput | travel_agentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type airlineUpsertWithWhereUniqueWithoutUserInput = {
    where: airlineWhereUniqueInput;
    update: XOR<airlineUpdateWithoutUserInput, airlineUncheckedUpdateWithoutUserInput>;
    create: XOR<airlineCreateWithoutUserInput, airlineUncheckedCreateWithoutUserInput>;
  };

  export type airlineUpdateWithWhereUniqueWithoutUserInput = {
    where: airlineWhereUniqueInput;
    data: XOR<airlineUpdateWithoutUserInput, airlineUncheckedUpdateWithoutUserInput>;
  };

  export type airlineUpdateManyWithWhereWithoutUserInput = {
    where: airlineScalarWhereInput;
    data: XOR<airlineUpdateManyMutationInput, airlineUncheckedUpdateManyWithoutUserInput>;
  };

  export type airlineScalarWhereInput = {
    AND?: airlineScalarWhereInput | airlineScalarWhereInput[];
    OR?: airlineScalarWhereInput[];
    NOT?: airlineScalarWhereInput | airlineScalarWhereInput[];
    id?: UuidFilter<'airline'> | string;
    description?: StringNullableFilter<'airline'> | string | null;
    founded_at?: DateTimeNullableFilter<'airline'> | Date | string | null;
    headquarters?: StringNullableFilter<'airline'> | string | null;
    name?: StringFilter<'airline'> | string;
    created_at?: DateTimeFilter<'airline'> | Date | string;
    updated_at?: DateTimeFilter<'airline'> | Date | string;
    user_id?: UuidFilter<'airline'> | string;
    tenant_id?: StringFilter<'airline'> | string;
  };

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
  };

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>;
  };

  export type customer_serviceUpsertWithWhereUniqueWithoutUserInput = {
    where: customer_serviceWhereUniqueInput;
    update: XOR<customer_serviceUpdateWithoutUserInput, customer_serviceUncheckedUpdateWithoutUserInput>;
    create: XOR<customer_serviceCreateWithoutUserInput, customer_serviceUncheckedCreateWithoutUserInput>;
  };

  export type customer_serviceUpdateWithWhereUniqueWithoutUserInput = {
    where: customer_serviceWhereUniqueInput;
    data: XOR<customer_serviceUpdateWithoutUserInput, customer_serviceUncheckedUpdateWithoutUserInput>;
  };

  export type customer_serviceUpdateManyWithWhereWithoutUserInput = {
    where: customer_serviceScalarWhereInput;
    data: XOR<customer_serviceUpdateManyMutationInput, customer_serviceUncheckedUpdateManyWithoutUserInput>;
  };

  export type travel_agentUpsertWithWhereUniqueWithoutUserInput = {
    where: travel_agentWhereUniqueInput;
    update: XOR<travel_agentUpdateWithoutUserInput, travel_agentUncheckedUpdateWithoutUserInput>;
    create: XOR<travel_agentCreateWithoutUserInput, travel_agentUncheckedCreateWithoutUserInput>;
  };

  export type travel_agentUpdateWithWhereUniqueWithoutUserInput = {
    where: travel_agentWhereUniqueInput;
    data: XOR<travel_agentUpdateWithoutUserInput, travel_agentUncheckedUpdateWithoutUserInput>;
  };

  export type travel_agentUpdateManyWithWhereWithoutUserInput = {
    where: travel_agentScalarWhereInput;
    data: XOR<travel_agentUpdateManyMutationInput, travel_agentUncheckedUpdateManyWithoutUserInput>;
  };

  export type travel_agentScalarWhereInput = {
    AND?: travel_agentScalarWhereInput | travel_agentScalarWhereInput[];
    OR?: travel_agentScalarWhereInput[];
    NOT?: travel_agentScalarWhereInput | travel_agentScalarWhereInput[];
    id?: UuidFilter<'travel_agent'> | string;
    user_id?: UuidFilter<'travel_agent'> | string;
    agency_name?: StringFilter<'travel_agent'> | string;
    agency_address?: StringFilter<'travel_agent'> | string;
    agency_phone?: StringFilter<'travel_agent'> | string;
    created_at?: DateTimeFilter<'travel_agent'> | Date | string;
    updated_at?: DateTimeFilter<'travel_agent'> | Date | string;
  };

  export type customer_serviceCreateManyAirlineInput = {
    id?: string;
    user_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type flightCreateManyAirlineInput = {
    id?: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: Date | string;
    arrival_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomer_serviceNestedInput;
  };

  export type customer_serviceUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type flightUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutFlightNestedInput;
  };

  export type flightUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutFlightNestedInput;
  };

  export type flightUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_number?: StringFieldUpdateOperationsInput | string;
    departure_airport?: StringFieldUpdateOperationsInput | string;
    arrival_airport?: StringFieldUpdateOperationsInput | string;
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyFlightInput = {
    id?: string;
    user_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type airlineCreateManyUserInput = {
    id?: string;
    description?: string | null;
    founded_at?: Date | string | null;
    headquarters?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type bookingCreateManyUserInput = {
    id?: string;
    flight_id: string;
    booking_date: Date | string;
    seat_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customer_serviceCreateManyUserInput = {
    id?: string;
    airline_id: string;
    service_hours: string;
    service_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type travel_agentCreateManyUserInput = {
    id?: string;
    agency_name: string;
    agency_address: string;
    agency_phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type airlineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer_service?: customer_serviceUpdateManyWithoutAirlineNestedInput;
    flight?: flightUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer_service?: customer_serviceUncheckedUpdateManyWithoutAirlineNestedInput;
    flight?: flightUncheckedUpdateManyWithoutAirlineNestedInput;
  };

  export type airlineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    headquarters?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    flight?: flightUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    flight_id?: StringFieldUpdateOperationsInput | string;
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    seat_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    airline?: airlineUpdateOneRequiredWithoutCustomer_serviceNestedInput;
  };

  export type customer_serviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customer_serviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    airline_id?: StringFieldUpdateOperationsInput | string;
    service_hours?: StringFieldUpdateOperationsInput | string;
    service_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type travel_agentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agency_name?: StringFieldUpdateOperationsInput | string;
    agency_address?: StringFieldUpdateOperationsInput | string;
    agency_phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AirlineCountOutputTypeDefaultArgs instead
   */
  export type AirlineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AirlineCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FlightCountOutputTypeDefaultArgs instead
   */
  export type FlightCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    FlightCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use airlineDefaultArgs instead
   */
  export type airlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    airlineDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customer_serviceDefaultArgs instead
   */
  export type customer_serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customer_serviceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use flightDefaultArgs instead
   */
  export type flightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    flightDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use travel_agentDefaultArgs instead
   */
  export type travel_agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    travel_agentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
