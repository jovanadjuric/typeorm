import { TypeORMError } from "./TypeORMError"

/**
 * Thrown when consumer tries to connect when he already connected.
 */
export class CannotConnectAlreadyConnectedError extends TypeORMError {
    constructor() {
        super(
            `Cannot create a connection because connection to the database already established.`,
        )
    }
}
