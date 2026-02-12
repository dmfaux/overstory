/**
 * Base error class for all Overstory errors.
 * Includes a machine-readable `code` field for programmatic handling.
 */
export class OverstoryError extends Error {
	readonly code: string;

	constructor(message: string, code: string, options?: ErrorOptions) {
		super(message, options);
		this.name = "OverstoryError";
		this.code = code;
	}
}

/**
 * Raised when config loading or validation fails.
 * Examples: missing config file, invalid YAML, schema violations.
 */
export class ConfigError extends OverstoryError {
	readonly configPath: string | null;
	readonly field: string | null;

	constructor(
		message: string,
		context?: {
			configPath?: string;
			field?: string;
			cause?: Error;
		},
	) {
		super(message, "CONFIG_ERROR", { cause: context?.cause });
		this.name = "ConfigError";
		this.configPath = context?.configPath ?? null;
		this.field = context?.field ?? null;
	}
}

/**
 * Raised for agent lifecycle issues.
 * Examples: spawn failure, agent not found, depth limit exceeded.
 */
export class AgentError extends OverstoryError {
	readonly agentName: string | null;
	readonly capability: string | null;

	constructor(
		message: string,
		context?: {
			agentName?: string;
			capability?: string;
			cause?: Error;
		},
	) {
		super(message, "AGENT_ERROR", { cause: context?.cause });
		this.name = "AgentError";
		this.agentName = context?.agentName ?? null;
		this.capability = context?.capability ?? null;
	}
}

/**
 * Raised when git worktree operations fail.
 * Examples: worktree creation, branch conflicts, cleanup failures.
 */
export class WorktreeError extends OverstoryError {
	readonly worktreePath: string | null;
	readonly branchName: string | null;

	constructor(
		message: string,
		context?: {
			worktreePath?: string;
			branchName?: string;
			cause?: Error;
		},
	) {
		super(message, "WORKTREE_ERROR", { cause: context?.cause });
		this.name = "WorktreeError";
		this.worktreePath = context?.worktreePath ?? null;
		this.branchName = context?.branchName ?? null;
	}
}

/**
 * Raised when mail system operations fail.
 * Examples: DB access errors, invalid message format, delivery failures.
 */
export class MailError extends OverstoryError {
	readonly agentName: string | null;
	readonly messageId: string | null;

	constructor(
		message: string,
		context?: {
			agentName?: string;
			messageId?: string;
			cause?: Error;
		},
	) {
		super(message, "MAIL_ERROR", { cause: context?.cause });
		this.name = "MailError";
		this.agentName = context?.agentName ?? null;
		this.messageId = context?.messageId ?? null;
	}
}

/**
 * Raised when merge or conflict resolution fails.
 * Examples: unresolvable conflicts, merge queue errors, tier escalation failures.
 */
export class MergeError extends OverstoryError {
	readonly branchName: string | null;
	readonly conflictFiles: string[];

	constructor(
		message: string,
		context?: {
			branchName?: string;
			conflictFiles?: string[];
			cause?: Error;
		},
	) {
		super(message, "MERGE_ERROR", { cause: context?.cause });
		this.name = "MergeError";
		this.branchName = context?.branchName ?? null;
		this.conflictFiles = context?.conflictFiles ?? [];
	}
}

/**
 * Raised when input validation fails.
 * Examples: invalid agent names, malformed beadIds, bad CLI arguments.
 */
export class ValidationError extends OverstoryError {
	readonly field: string | null;
	readonly value: unknown;

	constructor(
		message: string,
		context?: {
			field?: string;
			value?: unknown;
			cause?: Error;
		},
	) {
		super(message, "VALIDATION_ERROR", { cause: context?.cause });
		this.name = "ValidationError";
		this.field = context?.field ?? null;
		this.value = context?.value ?? null;
	}
}
