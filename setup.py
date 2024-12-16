from setuptools import setup
from pyuwu import VERSION_NUMBER

with open("README.md", "r") as fh:
    long_description = fh.read()

# Install python package, scripts and manual pages
setup(
    name="pyuwu",
    version=VERSION_NUMBER,
    author="nshout",
    license="MIT",
    description="Python with daddy issues.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/nshout/pyuwu",
    scripts=["scripts/uwu2py", "scripts/pyuwu", "scripts/py2uwu"],
    data_files=[("man/man1", ["etc/pyuwu.1", "etc/py2uwu.1", "etc/uwu2py.1"])],
    packages=["pyuwu"],
    zip_safe=False,
)
