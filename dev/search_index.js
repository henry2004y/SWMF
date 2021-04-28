var documenterSearchIndex = {"docs":
[{"location":"man/examples/#Examples-1","page":"Example","title":"Examples","text":"","category":"section"},{"location":"man/examples/#IDL-format-output-loader-1","page":"Example","title":"IDL format output loader","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Read data","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"1d_bin.out\";\ndata = readdata(filename);\ndata = readdata(filename, verbose=true);\ndata = readdata(filename, npict=1);\ndata = readdata(filename, dir=\".\");","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D structured spherical coordinates","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"3d_structured.out\";\ndata = readdata(filename, verbose=false);","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"log file","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"logfilename = \"shocktube.log\";\nhead, data = readlogdata(logfilename)","category":"page"},{"location":"man/examples/#Derived-variables-1","page":"Example","title":"Derived variables","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"v = getvars(data, [\"Bx\", \"By\", \"Bz\"])\nB = @. sqrt(v[\"Bx\"]^2 + v[\"By\"]^2 + v[\"Bz\"]^2)","category":"page"},{"location":"man/examples/#Output-format-conversion-1","page":"Example","title":"Output format conversion","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"We can convert 2D/3D BATSRUS outputs *.dat to VTK formats. It uses the VTK XML format writer writeVTK to generate files for Paraview and Tecplot. The default converted filename is out.vtu.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"ASCII Tecplot file (supports both tec and tcp) and binary Tecplot file (set DOSAVETECBINARY=TRUE in BATSRUS PARAM.in):","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"x=0_mhd_1_n00000050.dat\"\n#filename = \"3d_ascii.dat\"\n#filename = \"3d_bin.dat\"\nhead, data, connectivity = readtecdata(filename)\nconvertTECtoVTU(head, data, connectivity)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D structured IDL file (gridType=1 returns rectilinear vtr file, gridType=2 returns structured vts file):","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"3d_structured.out\"\nconvertIDLtoVTK(filename, gridType=1)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D unstructured IDL file together with header and tree file:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filetag = \"3d_var_1_n00002500\"\nconvertIDLtoVTK(filetag)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"note: Note\nThe file suffix should not be provided for this to work correctly!","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Multiple files:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Batsrus, Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\ntec = readtecdata.(filenames) # head, data, connectivity\nfor (i, outname) in enumerate(filenames)\n   convertTECtoVTU(tec[i][1], tec[i][2], tec[i][3], outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"If each individual file size is large, consider using:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Batsrus, Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\nfor (i, outname) in enumerate(filenames)\n   head, data, connectivity = readtecdata(outname)\n   convertTECtoVTU(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Multiple files in parallel:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Distributed\n@everywhere using Batsrus, Glob\n\nfilenamesIn = \"cut*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\n\n@sync @distributed for outname in filenames\n   println(\"filename=$(outname)\")\n   head, data, connectivity = readtecdata(outname)\n   convertTECtoVTU(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#Data-visualzation-1","page":"Example","title":"Data visualzation","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"We provide plot recipes for Plots.jl and wrappers for PyPlot.jl.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"The recipes for Plots.jl will work on all functions given the correct dimensions, e.g.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Plots\nplot(data, \"p\")\ncontourf(data, \"Mx\", xlabel=\"x\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"See the official documentation for Plots.jl for more information.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"On the other hand, most common 1D and 2D plotting functions are wrapped over their Matplotlib equivalences through PyPlot.jl. To trigger the wrapper, using PyPlot. Check out the documentation for more details.","category":"page"},{"location":"man/examples/#Quick-exploration-of-data-1","page":"Example","title":"Quick exploration of data","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"A general plotdata function is provided for quick visualizations using Matplotlib.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"1D binary","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plotdata(data, \"p\", plotmode=\"line\")\nplotdata(data, \"p\", plotmode=\"linegrid\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"2D Cartesian (structured)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plotdata(data, \"p bx;by\", plotmode=\"contbar streamover\")\nplotdata(data, \"p bx;by\", plotmode=\"contbar quiverover\")\nplotdata(data, \"p bx;by\", plotmode=\"contbar streamover\", density=2.0)\nplotdata(data, \"p\", plotmode=\"grid\")\nplotdata(data, \"p\", plotmode=\"contbar\", plotrange=[-50., 50., -1., 1.])\nplotdata(data, \"p\", plotmode=\"contbar\")\nplotdata(data, \"p\", plotmode=\"contbarlog\")\nplotdata(data, \"p\", plotmode=\"surfbar\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"2D unstructured","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plotdata(data, \"rho\", plotmode=\"contbar\")\nplotdata(data, \"rho\", plotmode=\"trimesh\")\nplotdata(data, \"rho\", plotmode=\"tricont\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"2D structured spherical coordinates","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plotdata(data, \"rho\", plotmode=\"contbar\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D box","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plotdata(data, \"bx\", plotmode=\"contbar\", cut=\"y\", cutPlaneIndex=1, level=20)\nplotdata(data, \"bx\", plotmode=\"contbar\", cut=\"y\", plotrange=[-1.4,-1.1,0.70,0.78])\nusing PyPlot\nplt.axis(\"scaled\")\n\nsubplot(2,2,(1,3))\ncutplot(data, \"Ex\", cut='y', cutPlaneIndex=128, plotrange=plotrange)","category":"page"},{"location":"man/examples/#Find-indexes-1","page":"Example","title":"Find indexes","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"To get the index of a certain quantity, e.g. electron number density","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"ρe_= findfirst(x->x==\"rhoS0\", data.head.wnames)","category":"page"},{"location":"man/examples/#Multiple-dispatch-for-Matplotlib-functions-1","page":"Example","title":"Multiple dispatch for Matplotlib functions","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Using the same plotting functions as in Matplotlib is allowed, and actually recommended. Some plotting functions can be directly called as shown below, which allows for more control from the user. using PyPlot to import the full capability of the package, etc. adding colorbar, changing line colors, setting colorbar range with clim.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"line plot","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plot(data, \"p\", linewidth=2, color=\"green\")\nc = plot(data, \"p\")\nplt.setp(c, linestyle=\"--\", linewidth=2);","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"scatter plot","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"scatter(data, \"p\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"contour","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"# 2D contour\ncontour(data, \"p\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filled contour","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"contourf(data, \"p\")\ncontourf(data, \"p\", levels, plotrange=[-10,10,-Inf,Inf], plotinterval=0.1)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"surface plot","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plot_surface(data, \"p\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"triangle surface plot","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"plot_trisurf(data, \"p\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"triangle filled contour plot","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"tricontourf(data, \"p\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"streamline","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"streamplot(data, \"bx;bz\")\nstreamplot(data, \"bx;bz\", density=2.0, color=\"k\", plotinterval=1.0, plotrange=[-10,10,-Inf,Inf])","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"streamline + contourf","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Batsrus, PyPlot\n\nfilename = \"y*out\"\ndata = readdata(filename)\n\nDN = matplotlib.colors.DivergingNorm\nset_cmap(\"RdBu_r\")\n\ncontourf(data, \"uxS0\", 50, plotrange=[-3,3,-3,3], plotinterval=0.05, norm=DN(0))\ncolorbar()\nstreamplot(data, \"uxS0;uzS0\", density=2.0, color=\"g\",plotrange=[-3,3,-3,3])\nxlabel(\"x\"); ylabel(\"y\"); title(\"Ux [km/s]\")\n\ncontourf(data,\"uxS0\", 50, plotinterval=0.05, norm=DN(0))\ncolorbar()\naxis(\"scaled\")\nxlabel(\"x\"); ylabel(\"y\"); title(\"uxS0\")","category":"page"},{"location":"man/examples/#Tracing-1","page":"Example","title":"Tracing","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"The built-in streamplot function in Matplotlib is not satisfactory for accurately tracing. Instead we recommend FieldTracer.jl for tracing fieldlines and streamlines.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"An example of tracing in a 2D cut and plot the field lines over contour:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Batsrus, PyPlot\n\nfilename = \"y=0_var_1_t00000000_n00000000.out\"\ndata = readdata(filename, dir=\"test\")\n\nbx = data.w[:,:,5]\nbz = data.w[:,:,7]\nx  = data.x[:,1,1]\nz  = data.x[1,:,2]\n\nseeds = select_seeds(x, z; nSeed=100) # randomly select the seeding points\n\nfor i = 1:size(seeds)[2]\n   xs = seeds[1,i]\n   zs = seeds[2,i]\n   # Tracing in both direction. Check the document for more options.\n   x1, z1 = trace2d_eul(bx, bz, xs, zs, x, z, ds=0.1, maxstep=1000, gridType=\"ndgrid\")\n   plot(x1,z1,\"--\")\nend\naxis(\"equal\")","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Currently the select_seeds function uses pseudo random number generator that produces the same seeds every time.","category":"page"},{"location":"#Batsrus.jl-1","page":"Home","title":"Batsrus.jl","text":"","category":"section"},{"location":"#Overview-1","page":"Home","title":"Overview","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nThis package is still under development, so be careful for any future breaking changes!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"BATSRUS data reader, converter, and visualizer in Julia.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package provides the following functionalities:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"simulation data reader\n2D/3D region cut from the whole data\ninterpolation from unstructured to structured data\ndata format conversion to VTK\nsimulation data visualization","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The ultimate goal is to build a convenient tool of reading and analyzing simulation outputs which is easy to install and easy to use.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"tip: Ready to use?\nFeel free to contact the author for any help or collaboration!","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Install VisAna from the julia REPL prompt with","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"Batsrus\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Or in the Pkg REPL","category":"page"},{"location":"#","page":"Home","title":"Home","text":">pkg add Batsrus","category":"page"},{"location":"#Benchmark-1","page":"Home","title":"Benchmark","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Data loading speed of a 2.4GB 3D binary file, 317MB 3D binary file, and 65KB 2D binary file on Macbook Pro with quad core 2.2 GHz Intel i7 and 16 GB 1600 MHz DDR3:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"2.4GB tmax [s] tmean [s]\nJulia 2.73 1.32\nPython 1.35 1.34\nIDL 6.18 6.08\nMATLAB 16.02 10.60","category":"page"},{"location":"#","page":"Home","title":"Home","text":"317MB tmean [ms]\nJulia 180.8\nPython 179.5\nIDL 453.5\nMATLAB 698.4","category":"page"},{"location":"#","page":"Home","title":"Home","text":"65KB tmean [μs]\nJulia 163.36\nPython 4390.95\nIDL 1970.29\nMATLAB 19273.25","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The Julia, IDL, and MATLAB version all shares the same kernel design. The timings are obtained for Julia v1.3.1, Python 3.7.6 + Numpy 1.18.1, IDL 8.5, and MATLAB R2018b. For dynamic languages, the first time when function gets executed is usually also the slowest. Currently spacepy performs slightly better because of the well-optimized numpy library in C. For small data sizes, Julia is much faster than others.","category":"page"},{"location":"#Calling-From-Python-1","page":"Home","title":"Calling From Python","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"In Python, you can easily take advantage of this package with the aid of PyJulia. After the installation, in the Python REPL:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"from julia import Batsrus\ndir = 'test'\nfilename = '1d__raw_2_t25.60000_n00000258.out'\ndata = Batsrus.readdata(filename, dir=dir)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"There you have it! Enjoy!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"warning: Python dependency\nPyPlot package backend may be affected by the settings of PyJulia dependencies. If you want to set it back properly, you need to recompile the PyCall package in Julia.","category":"page"},{"location":"#Developers-1","page":"Home","title":"Developers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package inherits the ideas and code structures from its predecessor in IDL (developed by Gábor Tóth) and MATLAB.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Batsrus.jl is developed and maintained by Hongyang Zhou.","category":"page"},{"location":"man/internal/#APIs-1","page":"Internal","title":"APIs","text":"","category":"section"},{"location":"man/internal/#Public-1","page":"Internal","title":"Public","text":"","category":"section"},{"location":"man/internal/#Types-1","page":"Internal","title":"Types","text":"","category":"section"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"Modules = [Batsrus]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"man/internal/#Batsrus.Data","page":"Internal","title":"Batsrus.Data","text":"Data\n\nPrimary data storage type, with fields head of header info, grid x, value w, and file info list.\n\n\n\n\n\n","category":"type"},{"location":"man/internal/#Functions-1","page":"Internal","title":"Functions","text":"","category":"section"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"Modules = [Batsrus]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"man/internal/#Batsrus.convertIDLtoVTK-Tuple{AbstractString}","page":"Internal","title":"Batsrus.convertIDLtoVTK","text":"convertIDLtoVTK(filename; dir=\".\", gridType=1, verbose=false)\n\nConvert 3D BATSRUS *.out to VTK. If gridType==1, it converts to the  rectilinear grid; if gridType==2, it converts to the structured grid. If filename does not end with \"out\", it tries to find the \".info\" and \".tree\" file with the same name tag and generates 3D unstructured VTU file.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.convertTECtoVTU","page":"Internal","title":"Batsrus.convertTECtoVTU","text":"convertTECtoVTU(head, data, connectivity, filename=\"out\")\n\nConvert unstructured Tecplot data to VTK. Note that if using voxel type data in VTK, the connectivity sequence is different from Tecplot. Note that the 3D connectivity sequence in Tecplot is the same with the hexahedron type in VTK, but different with the voxel type. The 2D connectivity sequence is the same as the quad type, but different with the pixel type. For example, in 3D the index conversion is:\n\n# PLT to VTK voxel index_ = [1 2 4 3 5 6 8 7]\nfor i = 1:2\n   connectivity = swaprows!(connectivity, 4*i-1, 4*i)\nend\n\n\n\n\n\n","category":"function"},{"location":"man/internal/#Batsrus.cutdata-Tuple{Data, AbstractString}","page":"Internal","title":"Batsrus.cutdata","text":"cutdata(data, var; plotrange=[-Inf,Inf,-Inf,Inf], cut=' ',\n\tcutPlaneIndex=1)\n\nGet 2D plane cut data of 3D box data.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.cutplot-Tuple{Data, AbstractString}","page":"Internal","title":"Batsrus.cutplot","text":"cutplot(data, var; plotrange=[-Inf,Inf,-Inf,Inf], cut=' ',\n   plotinterval=0.1, density=1.0, cutPlaneIndex=1,level=20)\n\n2D plane cut contourf of 3D box data.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getConnectivity-Tuple{Batl}","page":"Internal","title":"Batsrus.getConnectivity","text":"Get cell connectivity list.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getvar-Union{Tuple{T}, Tuple{Data, T}} where T<:AbstractString","page":"Internal","title":"Batsrus.getvar","text":"Return variable data from string var.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getvars-Union{Tuple{T}, Tuple{Data, Vector{T}}} where T<:AbstractString","page":"Internal","title":"Batsrus.getvars","text":"getvars(data::Data, Names::Vector) -> Dict\n\nReturn variables' data as a dictionary from string vector. See also: getvar.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.plotdata-Tuple{Data, AbstractString}","page":"Internal","title":"Batsrus.plotdata","text":"plotdata(data, func, (...))\n\nPlot the variable from SWMF output.\n\nplotdata(data, \"p\", plotmode=\"contbar\")\n\nplotdata(data, \"p\", plotmode=\"grid\")\n\nplotdata(data, func, plotmode=\"trimesh\",plotrange=plotrange, plotinterval=0.2)\n\nInput arguments\n\ndata::Data: output data.\nfunc::String: variables for plotting.\nplotmode::String: (optional) type of plotting [\"cont\",\"contbar\"]...\nplotrange::Vector: (optional) range of plotting.\nplotinterval: (optional) interval for interpolation.\nlevel: (optional) level of contour.\ncut: (optional) select 2D cut plane from 3D outputs [\"x\",\"y\",\"z\"].\ncutPlaneIndex: (optional)\nmultifigure: (optional) 1 for multifigure display, 0 for subplots.\nverbose: (optional) display additional information.\ndensity: (optional) density for streamlines.\n\nRight now this can only deal with 2D plots or 3D cuts. Full 3D plots may be supported in the future.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.plotlogdata-Tuple{Any, NamedTuple, AbstractString}","page":"Internal","title":"Batsrus.plotlogdata","text":"plotlogdata(data, head, func; plotmode=\"line\")\n\nPlot information from log file.\n\nInput arguments\n\ndata::Array: output data.\nhead::NamedTuple: header info.\nfunc::String: variables for plotting.\nplotmode::String: type of plotting [\"line\",\"scatter\"].\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readdata","text":"readdata(filenameIn; dir=\".\", npict=1, verbose=false)\n\nRead data from BATSRUS output files. Stores the npict snapshot from an ascii or binary data file into the arrays of coordinates x and data w. Filename can be provided with wildcards.\n\nExamples\n\nfilename = \"1d_raw*\"\ndata = readdata(filename)\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readhead-Tuple{Any}","page":"Internal","title":"Batsrus.readhead","text":"Return header from info file. Currently only designed for 2D and 3D.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readlogdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readlogdata","text":"Read information from log file.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readtecdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readtecdata","text":"readtecdata(filename; verbose=false)\n\nReturn header, data and connectivity from BATSRUS Tecplot outputs. Both 2D and 3D binary and ASCII formats are supported.\n\nExamples\n\nfilename = \"3d_ascii.dat\"\nhead, data, connectivity = readtecdata(filename)\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readtree-Tuple{Any}","page":"Internal","title":"Batsrus.readtree","text":"Return BATL tree structure.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.showhead-Tuple{Batsrus.FileList, NamedTuple}","page":"Internal","title":"Batsrus.showhead","text":"showhead(file, filehead)\n\nDisplaying file header information.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.showhead-Tuple{Data}","page":"Internal","title":"Batsrus.showhead","text":"showhead(data)\n\nDisplaying file information for the Data type.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.streamslice-Tuple{Data, AbstractString}","page":"Internal","title":"Batsrus.streamslice","text":"streamslice(data::Data, var::String;\n   plotrange=[-Inf,Inf,-Inf,Inf], cut=' ',\n   plotinterval=0.1, density=1.0, cutPlaneIndex=1, color=\"w\", linewidth=1.0)\n\nPlot streamlines on 2D slices of 3D box data. Variable string must be separated with ;. Tranposes aree needed because of meshgrid and ndgrid conversion.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.subsurface-NTuple{4, Any}","page":"Internal","title":"Batsrus.subsurface","text":"subsurface(x, y, data, limits)\nsubsurface(x, y, u, v, limits)\n\nExtract subset of 2D surface dataset. See also: subvolume.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.subvolume-NTuple{5, Any}","page":"Internal","title":"Batsrus.subvolume","text":"subvolume(x, y, z, data, limits)\nsubvolume(x, y, z, u, v, w, limits)\n\nExtract subset of 3D dataset in ndgrid format. See also: subsurface.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.contour","page":"Internal","title":"PyPlot.contour","text":"contour(data, var, levels=0; plotrange, plotinterval, kwargs...)\n\nWrapper over the contour function in matplotlib.\n\n\n\n\n\n","category":"function"},{"location":"man/internal/#PyPlot.contourf","page":"Internal","title":"PyPlot.contourf","text":"contourf(data, var, levels=0; plotrange, plotinterval, kwargs...)\n\nWrapper over the contourf function in matplotlib.\n\n\n\n\n\n","category":"function"},{"location":"man/internal/#PyPlot.plot-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.plot","text":"plot(data, var; kwargs...)\n\nWrapper over the plot function in matplotlib.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.plot_surface-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.plot_surface","text":"plot_surface(data, var; plotrange, plotinterval, kwargs...)\n\nWrapper over the plot_surface function in matplotlib.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.plot_trisurf-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.plot_trisurf","text":"plot_trisurf(data::Data, var::String;\n   plotrange::Vector{Float64}=[-Inf,Inf,-Inf,Inf], kwargs::Dict=Dict())\n\nWrapper over the plot_trisurf function in matplotlib.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.scatter-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.scatter","text":"scatter(data, var; kwargs...)\n\nWrapper over the scatter function in matplotlib.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.streamplot-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.streamplot","text":"streamplot(data, var; plotrange, plotinterval=0.1, kwargs...)\n\nWrapper over the streamplot function in matplotlib. Streamplot does not have **kwargs in the API, but it supports density, color, and some other keywords.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#PyPlot.tricontourf-Tuple{Data, AbstractString}","page":"Internal","title":"PyPlot.tricontourf","text":"tricontourf(data, var; plotrange, plotinterval, kwargs...)\n\nWrapper over the tricontourf function in matplotlib.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"Modules = [UnitfulBatsrus]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"man/internal/#Private-1","page":"Internal","title":"Private","text":"","category":"section"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"```@autodocs Modules = [Batsrus] Public = false","category":"page"},{"location":"man/log/#Development-Log-1","page":"Log","title":"Development Log","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"All the workflows here is not restricted to one type of model output. After being familiar with new ideas and new models, one can easily make use of existing samples and create reader of their own. Because of the embarrassing parallelism nature of postprocessing, it is quite easy to take advantage of parallel approaches to process the data.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"For the plotting, streamline tracing and particle tracing, a common problem is the grid and related interpolation process. Now I have FieldTracer.jl and TestParticle.jl designed specifically for these tasks.","category":"page"},{"location":"man/log/#VTK-AMR-Grid-Structure-1","page":"Log","title":"VTK AMR Grid Structure","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"vtkOverlappingAMR implements a somewhat strict Berger-Collela AMR scheme:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"All grids are Cartesian.\nGrids at the same level do not overlap.\nThe refinement ratios, RL, between adjacent levels are integer (typically 2 or 4) and uniform within the same level.\nGrid cells are never partially refined; i.e., each cell is refined to four quads in 2D or eight hexahedra in 3D.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Or in other words,","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Refinement ratio across levels is constant.\nEach block at levels > 0 need to be covered 100% by one parent block of","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"previous level.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Some other restriction about what happens at the boundary.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"You can directly use vtkUniformGridAMR, which does not impose any restrictions. Most filters should work for this class - there just wouldn't be any specialized filters such as the dual-grid contour / clip ones for the vtkOverlappingAMR.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The vtkAMRInformation documentation consists only of","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Refinement ratio between AMR levels\nGrid spacing for each level\nThe file block index for each block parent child information, if requested","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"(Image: sample_2DAMR) Sample 2D AMR Dataset with two levels and refinement ratio, RL=4. The root level (L0) consists of a single grid shown in black wireframe while the next level (L1) consists of two grids, depicted in green wireframe and red wireframe respectively. The two grids at L1 are projected from the root level to illustrate that the cells underneath are “hidden.”","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"In VTK, the collection of AMR grids is stored in a vtkHierarchicalBoxDataSet data-structure. Each grid, G(Li,k), is represented by a vtkUniformGrid data structure where the unique key pair (Li,k) denotes the corresponding level (Li) and the grid index within the level (k) with respect to the underlying hierarchical structure. An array historically known as IBLANK, stored as a cell attribute in vtkUniformGrid, denotes whether a cell is hidden or not. The blanking array is subsequently used by the mapper to hide lower resolution cells accordingly when visualizing the dataset.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"To enable the execution of data queries without loading the entire dataset in memory, metadata information is employed. The metadata stores a minimal set of geometric information for each grid in the AMR hierarchy. Specifically, the AMR metadata, B(Li,k), corresponding to the grid G(Li,k), is represented using a vtkAMRBox object and it consists of the following information:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"N={Nx, Ny, Nz} — the cell dimensions of the grid (since the data is cell-centered)\nThe grid spacing at level L, hL={hx,hy,hz}\nThe grid level Li and grid index k\nThe global dataset origin, X=(X0, Y0, Z0), i.e., the minimum origin from all grids in level L0\nThe LoCorner and HiCorner, which describe the low and high corners of the rectangular region covered by the corresponding grid in a virtual integer lattice with the same spacing (h) that covers the entire domain.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"(Image: sample_2DAMR)","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Given the metadata information stored in the AMR box of each grid, the refinement ratio at each level can be easily computed using relationship (1) from Table 1. Further, the cartesian bounds the corresponding grid covers and the number of points and cells is also available (see relationships 2-4 in Table 1). Notably, geometric queries such as determining which cell contains a given point, or if a grid intersects a user-supplied slice plane, can be answered using just the metadata.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"There is a vtkAMRDualExtractionFilter, which constructs a dual-mesh (i.e., the mesh constructed by connecting the cell-centers) over the computational domain. If we can directly tell ParaView that the mesh we have is a dual-mesh, then the initial trial with multi-block data may work directly.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"AMRGaussianPulseSource","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"See Multi-Resolution Rendering with Overlapping AMR for the implementation of C++ reader in VTK.","category":"page"}]
}
