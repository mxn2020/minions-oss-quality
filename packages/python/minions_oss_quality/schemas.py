"""
Minions Oss-quality SDK — Type Schemas
Custom MinionType schemas for Minions Oss-quality.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

quality_gate_type = MinionType(
    id="oss-quality-quality-gate",
    name="Quality gate",
    slug="quality-gate",
    description="A quality check that must pass before release.",
    icon="🚦",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="threshold", type="number", label="threshold"),
        FieldDefinition(name="currentValue", type="number", label="currentValue"),
        FieldDefinition(name="isPassing", type="boolean", label="isPassing"),
        FieldDefinition(name="lastCheckedAt", type="string", label="lastCheckedAt"),
    ],
)

quality_report_type = MinionType(
    id="oss-quality-quality-report",
    name="Quality report",
    slug="quality-report",
    description="A quality assessment of a project snapshot.",
    icon="📋",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="testCoverage", type="number", label="testCoverage"),
        FieldDefinition(name="lintErrors", type="number", label="lintErrors"),
        FieldDefinition(name="buildPassing", type="boolean", label="buildPassing"),
        FieldDefinition(name="usabilityScore", type="number", label="usabilityScore"),
        FieldDefinition(name="overallGrade", type="select", label="overallGrade"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

custom_types: list[MinionType] = [
    quality_gate_type,
    quality_report_type,
]

