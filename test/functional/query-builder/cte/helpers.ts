import { DataSource } from "../../../../src"
import { CteCapabilities } from "../../../../src/driver/types/CteCapabilities"

export function filterByCteCapabilities(
    capability: keyof CteCapabilities,
    equalsTo: boolean = true,
): (conn: DataSource) => boolean {
    return (conn) => conn.driver.cteCapabilities[capability] === equalsTo
}
