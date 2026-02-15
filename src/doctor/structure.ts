import type { DoctorCheck, DoctorCheckFn, OverstoryConfig } from "../types.ts";

/**
 * Directory structure checks.
 * Validates that .overstory/ and its subdirectories exist with correct permissions.
 */
export const checkStructure: DoctorCheckFn = (
	_config: OverstoryConfig,
	_overstoryDir: string,
): DoctorCheck[] => {
	// Stub: checks will be implemented by a dedicated builder
	return [];
};
