import type { DoctorCheck, DoctorCheckFn, OverstoryConfig } from "../types.ts";

/**
 * Cross-subsystem consistency checks.
 * Validates SessionStore vs worktrees, beads vs agent tasks, etc.
 */
export const checkConsistency: DoctorCheckFn = (
	_config: OverstoryConfig,
	_overstoryDir: string,
): DoctorCheck[] => {
	// Stub: checks will be implemented by a dedicated builder
	return [];
};
