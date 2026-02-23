"""
Minions Oss-quality Python SDK

Linting rules, test coverage targets, usability checklists, and release gates
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Oss-quality.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
