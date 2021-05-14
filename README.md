# Batsrus.jl

[![Build Status](https://img.shields.io/github/workflow/status/henry2004y/Batsrus.jl/CI)](https://github.com/henry2004y/Batsrus.jl/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![](https://img.shields.io/badge/docs-latest-blue.svg)][Batsrus-doc]
[![][codecov-img]][codecov-url]

Fast [BATSRUS](https://github.com/MSTEM-QUDA/BATSRUS)/[SWMF](https://github.com/MSTEM-QUDA/SWMF) data reading, converting, and visualizing using Julia, successor of [VisAnaMatlab](https://github.com/henry2004y/VisAnaMatlab).

This package provides the following functionalities:
  * simulation data reader
  * 2D/3D region cut from the whole domain
  * interpolation from unstructured to structured data
  * data format conversion to VTK
  * simulation data visualization

For more details, please check the [document][Batsrus-doc].

## Prerequisites

* Julia 1.6+

* (Optional) Python and Matplotlib

## Installation
```
using Pkg
Pkg.add("Batsrus")
```

## Usage

See the [examples](https://henry2004y.github.io/Batsrus.jl/dev/man/examples/).

### Using from Python

In Python, you can easily take advantage of this package with the aid of [PyJulia](https://pyjulia.readthedocs.io/en/latest/).
After the installation, in the Python repl:
```python
from julia import Batsrus
dir = 'test'
filename = '1d__raw_2_t25.60000_n00000258.out'
data = Batsrus.readdata(filename, dir=dir)
```
There you have it! Enjoy!

## Benchmark

See the [benchmark](https://henry2004y.github.io/Batsrus.jl/dev/#Benchmark-1) in the document.

## Author

* **Hongyang Zhou** - *Initial work* - [henry2004y](https://github.com/henry2004y)

## Acknowledgments

* All the nice guys who share their codes!

[travis-url]: https://travis-ci.com/github/henry2004y/Batsrus.jl/builds
[codecov-img]: https://codecov.io/gh/henry2004y/Batsrus.jl/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/henry2004y/Batsrus.jl
[Batsrus-doc]: https://henry2004y.github.io/Batsrus.jl/dev
