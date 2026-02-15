import type { DoctorCheck, DoctorCheckFn, OverstoryConfig } from "../types.ts";

/**
 * Agent state checks.
 * Validates agent definitions, tmux sessions, and agent identity files.
 */
export const checkAgents: DoctorCheckFn = (
	_config: OverstoryConfig,
	_overstoryDir: string,
): DoctorCheck[] => {
	// Stub: checks will be implemented by a dedicated builder
	return [];
};
