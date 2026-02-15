import type { DoctorCheck, DoctorCheckFn, OverstoryConfig } from "../types.ts";

/**
 * Merge queue health checks.
 * Validates merge-queue.json format and detects stale entries.
 */
export const checkMergeQueue: DoctorCheckFn = (
	_config: OverstoryConfig,
	_overstoryDir: string,
): DoctorCheck[] => {
	// Stub: checks will be implemented by a dedicated builder
	return [];
};
