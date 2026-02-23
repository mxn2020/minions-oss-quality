/**
 * @module @minions-oss-quality/sdk/schemas
 * Custom MinionType schemas for Minions Oss-quality.
 */

import type { MinionType } from 'minions-sdk';

export const qualitygateType: MinionType = {
  id: 'oss-quality-quality-gate',
  name: 'Quality gate',
  slug: 'quality-gate',
  description: 'A quality check that must pass before release.',
  icon: '🚦',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'threshold', type: 'number', label: 'threshold' },
    { name: 'currentValue', type: 'number', label: 'currentValue' },
    { name: 'isPassing', type: 'boolean', label: 'isPassing' },
    { name: 'lastCheckedAt', type: 'string', label: 'lastCheckedAt' },
  ],
};

export const qualityreportType: MinionType = {
  id: 'oss-quality-quality-report',
  name: 'Quality report',
  slug: 'quality-report',
  description: 'A quality assessment of a project snapshot.',
  icon: '📋',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'testCoverage', type: 'number', label: 'testCoverage' },
    { name: 'lintErrors', type: 'number', label: 'lintErrors' },
    { name: 'buildPassing', type: 'boolean', label: 'buildPassing' },
    { name: 'usabilityScore', type: 'number', label: 'usabilityScore' },
    { name: 'overallGrade', type: 'select', label: 'overallGrade' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  qualitygateType,
  qualityreportType,
];

