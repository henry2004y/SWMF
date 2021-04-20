var documenterSearchIndex = {"docs":
[{"location":"man/examples/#Examples-1","page":"Example","title":"Examples","text":"","category":"section"},{"location":"man/examples/#IDL-format-output-loader-1","page":"Example","title":"IDL format output loader","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Read data","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"1d_bin.out\";\ndata = readdata(filename);\ndata = readdata(filename, verbose=true);\ndata = readdata(filename, npict=1);\ndata = readdata(filename, dir=\".\");","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D structured spherical coordinates","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"3d_structured.out\";\ndata = readdata(filename, verbose=false);","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"log file","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"logfilename = \"shocktube.log\";\nhead, data = readlogdata(logfilename)","category":"page"},{"location":"man/examples/#Derived-variables-1","page":"Example","title":"Derived variables","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"v = get_vars(data, [\"Bx\", \"By\", \"Bz\"])\nB = @. sqrt(v.Bx^2 + v.By^2 + v.Bz^2)","category":"page"},{"location":"man/examples/#Output-format-conversion-1","page":"Example","title":"Output format conversion","text":"","category":"section"},{"location":"man/examples/#","page":"Example","title":"Example","text":"We can convert 2D/3D BATSRUS outputs *.dat to VTK formats. The default converted filename is out.vtu.","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"ASCII Tecplot file (supports both tec and tcp) and binary Tecplot file (set DOSAVETECBINARY=TRUE in BATSRUS PARAM.in):","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"x=0_mhd_1_n00000050.dat\"\n#filename = \"3d_ascii.dat\"\n#filename = \"3d_bin.dat\"\nhead, data, connectivity = readtecdata(filename)\nconvertTECtoVTU(head, data, connectivity)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D structured IDL file (gridType=1 returns rectilinear vtr file, gridType=2 returns structured vts file):","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filename = \"3d_structured.out\"\nconvertIDLtoVTK(filename, gridType=1)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"3D unstructured IDL file together with header and tree file:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"filetag = \"3d__var_1_n00002500\"\nconvertIDLtoVTK(filetag)","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"note: Note\nThe file suffix should not be provided for this to work correctly!","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Multiple files:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\ntec = readtecdata.(filenames) # head, data, connectivity\nfor (i, outname) in enumerate(filenames)\n   convertTECtoVTU(tec[i][1], tec[i][2], tec[i][3], outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"If each individual file size is large, consider using:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\nfor (i, outname) in enumerate(filenames)\n   head, data, connectivity = readtecdata(outname)\n   convertTECtoVTU(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"Multiple files in parallel:","category":"page"},{"location":"man/examples/#","page":"Example","title":"Example","text":"using Distributed\n@everywhere using Pkg\n@everywhere Pkg.activate(\"VisAnaJulia\");\n@everywhere using VisAna, Glob\n\nfilenamesIn = \"cut*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\n\n@sync @distributed for outname in filenames\n   println(\"filename=$(outname)\")\n   head, data, connectivity = readtecdata(outname)\n   convertTECtoVTU(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"#Batsrus.jl-1","page":"Home","title":"Batsrus.jl","text":"","category":"section"},{"location":"#Overview-1","page":"Home","title":"Overview","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nThis package is still under development, so be careful for any future breaking changes!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"BATSRUS data reader and converter in Julia.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package inherits the ideas and code structures from its predecessor in IDL (developed by Gábor Tóth) and MATLAB (developed by Hongyang Zhou), and was originally part of VisAna. It uses the VTK XML format writer writeVTK to generate files for Paraview and Tecplot.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package provides the following functionalities:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"simulation data reader\ndata format conversion\nprogramming language interoperability","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The ultimate goal is to build a convenient tool of reading and analyzing simulation outputs which is easy to install and easy to use.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"tip: Ready to use?\nFeel free to contact the author for any help or collaboration!","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Install VisAna from the julia REPL prompt with","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"Batsrus\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n    \"man/log.md\",\n    \"man/examples.md\",\n    \"man/functions.md\",\n    \"man/types.md\"\n]\nDepth = 1","category":"page"},{"location":"#Benchmark-1","page":"Home","title":"Benchmark","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Data loading speed of a 2.4GB 3D binary file, 317MB 3D binary file, and 65KB 2D binary file on Macbook Pro with quad core 2.2 GHz Intel i7 and 16 GB 1600 MHz DDR3:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"2.4GB tmax [s] tmean [s]\nJulia 2.73 1.32\nPython 1.35 1.34\nIDL 6.18 6.08\nMATLAB 16.02 10.60","category":"page"},{"location":"#","page":"Home","title":"Home","text":"317MB tmean [ms]\nJulia 180.8\nPython 179.5\nIDL 453.5\nMATLAB 698.4","category":"page"},{"location":"#","page":"Home","title":"Home","text":"65KB tmean [μs]\nJulia 163.36\nPython 4390.95\nIDL 1970.29\nMATLAB 19273.25","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The Julia, IDL, and MATLAB version all shares the same kernel design. The timings are obtained for Julia v1.3.1, Python 3.7.6 + Numpy 1.18.1, IDL 8.5, and MATLAB R2018b. For dynamic languages, the first time when function gets executed is usually also the slowest. Currently spacepy performs slightly better because of the well-optimized numpy library in C. For small data sizes, Julia is much faster than others.","category":"page"},{"location":"#Calling-From-Python-1","page":"Home","title":"Calling From Python","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"In Python, you can easily take advantage of this package with the aid of PyJulia. After the installation, in the Python repl:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"from julia import Batsrus\ndir = 'test'\nfilename = '1d__raw_2_t25.60000_n00000258.out'\ndata = Batsrus.readdata(filename, dir=dir)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"There you have it! Enjoy!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"warning: Python dependency\nPyPlot package backend may be affected by the settings of PyJulia dependencies. If you want to set it back properly, you need to recompile the PyCall package in Julia.","category":"page"},{"location":"#Developers-1","page":"Home","title":"Developers","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"VisAna is developed by Hongyang Zhou.","category":"page"},{"location":"man/internal/#APIs-1","page":"Internal","title":"APIs","text":"","category":"section"},{"location":"man/internal/#Public-types-in-module-Batsrus:-1","page":"Internal","title":"Public types in module Batsrus:","text":"","category":"section"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"Modules = [Batsrus]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"man/internal/#Batsrus.Data","page":"Internal","title":"Batsrus.Data","text":"Data\n\nPrimary data storage type, with fields head of header info, grid x, value w, and file info list.\n\n\n\n\n\n","category":"type"},{"location":"man/internal/#Functions-exported-from-Batsrus:-1","page":"Internal","title":"Functions exported from Batsrus:","text":"","category":"section"},{"location":"man/internal/#","page":"Internal","title":"Internal","text":"Modules = [Batsrus]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"man/internal/#Batsrus.convertIDLtoVTK-Tuple{AbstractString}","page":"Internal","title":"Batsrus.convertIDLtoVTK","text":"convertIDLtoVTK(filename; dir=\".\", gridType=1, verbose=false)\n\nConvert 3D BATSRUS *.out to VTK. If gridType==1, it converts to the  rectilinear grid; if gridType==2, it converts to the structured grid. If filename does not end with \"out\", it tries to find the \".info\" and \".tree\" file with the same name tag and generates 3D unstructured VTU file.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.convertTECtoVTU","page":"Internal","title":"Batsrus.convertTECtoVTU","text":"convertTECtoVTU(head, data, connectivity, filename=\"out\")\n\nConvert unstructured Tecplot data to VTK. Note that if using voxel type data in VTK, the connectivity sequence is different from Tecplot. Note that the 3D connectivity sequence in Tecplot is the same with the hexahedron type in VTK, but different with the voxel type. The 2D connectivity sequence is the same as the quad type, but different with the pixel type. For example, in 3D the index conversion is:\n\n# PLT to VTK voxel index_ = [1 2 4 3 5 6 8 7]\nfor i = 1:2\n   connectivity = swaprows!(connectivity, 4*i-1, 4*i)\nend\n\n\n\n\n\n","category":"function"},{"location":"man/internal/#Batsrus.cutdata-Tuple{Data, AbstractString}","page":"Internal","title":"Batsrus.cutdata","text":"cutdata(data, var; plotrange=[-Inf,Inf,-Inf,Inf], cut=' ',\n\tcutPlaneIndex=1)\n\nGet 2D plane cut data of 3D box data.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getConnectivity-Tuple{Batl}","page":"Internal","title":"Batsrus.getConnectivity","text":"Get cell connectivity list.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getvar-Union{Tuple{T}, Tuple{Data, T}} where T<:AbstractString","page":"Internal","title":"Batsrus.getvar","text":"Return variable data from string var.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.getvars-Union{Tuple{T}, Tuple{Data, Vector{T}}} where T<:AbstractString","page":"Internal","title":"Batsrus.getvars","text":"Return variables' data from string vector. See also: getvar\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readdata","text":"readdata(filenameIn; dir=\".\", npict=1, verbose=false)\n\nRead data from BATSRUS output files. Stores the npict snapshot from an ascii or binary data file into the arrays of coordinates x and data w. Filenames can be provided with wildcards.\n\nExamples\n\nfilename = \"1d_raw*\"\ndata = readdata(filename)\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readhead-Tuple{Any}","page":"Internal","title":"Batsrus.readhead","text":"Return header from info file. Currently only designed for 2D and 3D.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readlogdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readlogdata","text":"Read information from log file.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readtecdata-Tuple{AbstractString}","page":"Internal","title":"Batsrus.readtecdata","text":"readtecdata(filename; verbose=false)\n\nReturn header, data and connectivity from BATSRUS Tecplot outputs. Both 2D and 3D binary and ASCII formats are supported.\n\nExamples\n\nfilename = \"3d_ascii.dat\"\nhead, data, connectivity = readtecdata(filename)\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.readtree-Tuple{Any}","page":"Internal","title":"Batsrus.readtree","text":"Return BATL tree structure.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.showhead-Tuple{Batsrus.FileList, NamedTuple}","page":"Internal","title":"Batsrus.showhead","text":"showhead(file, filehead)\n\nDisplaying file header information.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.showhead-Tuple{Data}","page":"Internal","title":"Batsrus.showhead","text":"showhead(data)\n\nDisplaying file information for the Data type.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.subsurface-NTuple{4, Any}","page":"Internal","title":"Batsrus.subsurface","text":"subsurface(x, y, data, limits)\nsubsurface(x, y, u, v, limits)\n\nExtract subset of 2D surface dataset. See also: subvolume.\n\n\n\n\n\n","category":"method"},{"location":"man/internal/#Batsrus.subvolume-NTuple{5, Any}","page":"Internal","title":"Batsrus.subvolume","text":"subvolume(x, y, z, data, limits)\nsubvolume(x, y, z, u, v, w, limits)\n\nExtract subset of 3D dataset in ndgrid format. See also: subsurface.\n\n\n\n\n\n","category":"method"},{"location":"man/log/#Development-Log-1","page":"Log","title":"Development Log","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"All the workflows here is not restricted to one type of model output. After being familiar with new ideas and new models, one can easily make use of existing samples and create reader of their own. Because of the embarrassing parallelism nature of postprocessing, it is quite easy to take advantage of parallel approaches to process the data.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"This is the first time I use Julia for reading general ascii/binary files. It was a pain at first due to the lack of examples and documents using any basic function like read/read!, but fortunately I figured them out myself. One trick in reading binary array data is the usage of view, or subarrays, in Julia. In order to achieve that, I have to implement my own read! function in addition to the base ones. Before v0.5.1, readdata function in Matlab for large data is 2 times faster than that in Julia. The reason is simply using read or unsafe_read in the lower level. The latter one is much faster. After the fix, Julia version performs 5 times faster than the Matlab version in reading binary data.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"I am enlightened by the way SpacePy handles files. Instead of a separate header and data array, it may be better to build a more contained struct. Also, the header could use NamedTuple instead of Dict.","category":"page"},{"location":"man/log/#Reading-Multiple-Files-1","page":"Log","title":"Reading Multiple Files","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"And actually, by far there is no single use case where I need to read multiple files together. If you want to do so, just call the function twice.","category":"page"},{"location":"man/log/#Interoperability-1","page":"Log","title":"Interoperability","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"Demos are provided for calling Matlab/Python directly from Julia for debugging and testing. This part will later be separated out for potential Python and Matlab users. Currently the plotting and interpolation needed during plotting are done in Python. For instance, the 3D scatterred interpolation is done via Interpolate in Scipy. Hopefully these additional dependencies will be cut down.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"In the current version of PyCall and PyJulia, there is already direct support for accessing Julia struct objects (noted as jlwrap).","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"I have a new issue coming up with the interoperability with Python. I may need to split this package into pure IO and pure plotting to avoid the cross-dependency of Matplotlib. The idea is that PyPlot is only needed when I want to quickly scan through the data!","category":"page"},{"location":"man/log/#Units-1","page":"Log","title":"Units","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"There is a unit package in Julia unitful for handling units. Take a look at that one if you really want to solve the unit problem. On top of that, UnitfulRecipes.jl provides integrity with Plots.jl.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The ideas of how to make abstractions is more important than the unit conversion itself.","category":"page"},{"location":"man/log/#C-Dependency-1","page":"Log","title":"C Dependency","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"A real open-source project is a collaborated work not only from a bunch of people, but also a group of languages. In Julia, this can be achieved with the help of the Package manager.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"I want to have some C dependencies in my code instead of rewriting everything in Julia. This would serve as an attempt to quickly make things work.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Right now this seems to be a little bit difficult for me. I need to learn from experts. The tracing scheme in C is rewritten in Julia so I don't need to bother for now. Checkout BinaryBuilder for more information. A nice example is given in this C package.","category":"page"},{"location":"man/log/#VTK-1","page":"Log","title":"VTK","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"The VTK files does not have timestep information. To allow for further time series processing in Paraview, a script create_pvd.jl is provided for generating the pvd container. After dicussing with the author of WriteVTK.jl, this is finally achieved by adding a scalar that is not related to grid in VTK.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Currently, multi-block (VTM), rectilinear (VTR), and unstructured (VTU) conversion are supported. By default the file size will be reduced with compression level 6, but the actual compression ratio depends on the original data.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"For the plotting, streamline tracing and particle tracing, a common problem is the grid and related interpolation process. I am envisioning a more general approach to deal with block-based and unstructured grid to provide fundamental support for all of these.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Currently, BATSRUS output contains only cell center coordinates and cell center values (referring as tcp in PARAM.in), or node coordinates and interpolated nodal values (referring as tec). It is recommended to save in the tcp format to avoid interpolation. In principle VTK also supports the combination of node coordinates and cell center values, but it is not necessary here.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The simple multiblock VTK format conversion can only deal with data within a block, but it cannot figure out the connectivities between neighboring blocks. To fill the gap between blocks, we have to retrieve the tree data stored in .tree files. This requires a in-depth understanding of the grid tree structure in BATSRUS, and it took me a whole week to think, write and debug the code!","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Information contained in iTree_IA:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"the status of the node (used, unused, to be refined, to be coarsened, etc.);\nthe current, the maximum allowed and minimum allowed AMR levels for this node;\nthe three integer coordinates with respect to the whole grid;\nthe index of the parent node (if any);\nthe indexes of the children nodes (if any);\nthe processor index where the block is stored for active nodes;\nthe local block index for active nodes.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Basically, it requires several steps:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Obtain the neighbor block indexes.\nObtain the relative AMR level between neighbor blocks.\nCalculate the global cell indexes.\nFill in the connectivity list.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Several issues worth noticing:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The blocks are load balanced in Morton curve ordering.\nRules are needed to decide which block is in charge of writing the connectivities. Following the ModWriteTecplot implementation,\nconnectivities between blocks on the same AMR level are written by the left neighbors.\nconnectivities between blocks on different AMR levels are written by the finer blocks. This choice may simplify the logic in writing.\n2D formatted outputs (with dxPlot⩾0) will generate duplicate points for 2D runs after postprocessing. I don't fully understand why.\n2D unformatted outputs (with dxPlot<0) can generate correct point coordinates, but the output points in postprocessing are sorted based on x+e*y+e^2*z to allow removing duplicate points. This is mostly useful for 2D cuts of 3D simulations where duplicate points are possible to exist, and should be merged/averaged. This also means that it is literally impossible to figure out the original cell ordering, and impossible to convert to 2D VTU format (unless you construct some new connectivities based on triangulation)! However, it guarantees that the cut outputs from parallel runs are identical.\n3D unformatted output as stored as it is.\nThe simulation is typically done with multiple MPI processes. In the tree structure, each node only records the MPI process local block index. What makes it more complicated is that the local block indexes on a given MPI process may have skipped numbers because they are not in the physical simulation domain. This means that in order to get the true global block indexes, one needs to count how many blocks are used on all MPI processes with lower ranks, and also the order of the current node based on local block index on this MPI process.\nIt would be pretty difficult to count the number of elements in the connectivity list. Appending to an array is a very expensive operation: counting the elements in the first loop, preallocating the array and then repeat the same computation to fill in the list results in over 1000 times speedup.\nThe implementation in v0.2.3 inherits the bug from BATSRUS ModWriteTecplot that will generate duplicate voxel grid. For example, imagine a coarse block which is surrounded by refined blocks all around. On edge 8, the two refined face neighbor will both think they are in charge of writing the connectivity for the cells around the edge. This does not cause any serious issues as of now, so I don't fix it. Speaking of fixing that, there are two ways:\nfillCellNeighbors! not only deals with coarsened neighbors, but also the refined neighbors. This means that literally we need to implement the message_pass_cell completely. We still do a two-round process, write everything without checking, and in the end before IO remove the duplicate rows. This may be even faster then implementing some complicated writing rules to avoid duplicating.\nPolish the writing rules even further. This requires me to consider all possible cases. As a first step, for the above example case, neither of the two face neighbor should write the connectivity, but instead the edge neighbor should write.\nMany function names are inherited from BATL. I may consider rename them in the future if more general task is required.","category":"page"},{"location":"man/log/#Ordering-of-connectivity-1","page":"Log","title":"Ordering of connectivity","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"Tecplot and VTK unstructured data formats have the same connectivity ordering for hexahedron, but different ordering for voxel (in VTK). A function swaprows is implemented to switch the orderings.","category":"page"},{"location":"man/log/#Variable-naming-1","page":"Log","title":"Variable naming","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"Vector naming is messed up if you are using Tecplot VTK reader. For example, \"B [nT]\" –> \"B [nT]X\", \"B [nT]Y\", \"B [nT]_Z\". Not a big issue, but annoying.","category":"page"},{"location":"man/log/#AUXDATA-1","page":"Log","title":"AUXDATA","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"I have encountered a very bad problem of corrupting binary *.vtu files. It turned out that the issue is the starting position of data is wrong because of the way I skip the header AUXDATA part. Sometimes the binary numbers may contain newline character that confuses the reader. It is now fixed. Later on the reading of the header part is completely rewritten to provide better support for a variety of Tecplot Ascii headers. All the AXUDATA information is now stored into global VTK data.","category":"page"},{"location":"man/log/#Native-VTK-output-1","page":"Log","title":"Native VTK output","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"In the future versions of BATSRUS, we should be able to output VTK files directly with VTKFortran. I won't do it now.","category":"page"},{"location":"man/log/#Custom-VTK-reader-1","page":"Log","title":"Custom VTK reader","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"ParaView allows for custom Python reader. Examples can be found in Chapter 12.4 in the official manual, and an example of full Python plugins can be found at Kiware's gitlab page.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The XML package not only provide writing into XML files, but also reading XML structures. Therefore, if you want you can create a VTK reader.","category":"page"},{"location":"man/log/#AMR-Grid-Structure-1","page":"Log","title":"AMR Grid Structure","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"vtkOverlappingAMR implements a somewhat strict Berger-Collela AMR scheme:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"All grids are Cartesian.\nGrids at the same level do not overlap.\nThe refinement ratios, RL, between adjacent levels are integer (typically 2 or 4) and uniform within the same level.\nGrid cells are never partially refined; i.e., each cell is refined to four quads in 2D or eight hexahedra in 3D.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Or in other words,","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Refinement ratio across levels is constant.\nEach block at levels > 0 need to be covered 100% by one parent block of","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"previous level.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Some other restriction about what happens at the boundary.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"You can directly use vtkUniformGridAMR, which does not impose any restrictions. Most filters should work for this class - there just wouldn't be any specialized filters such as the dual-grid contour / clip ones for the vtkOverlappingAMR.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The vtkAMRInformation documentation consists only of","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Refinement ratio between AMR levels\nGrid spacing for each level\nThe file block index for each block parent child information, if requested","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"(Image: sample_2DAMR) Sample 2D AMR Dataset with two levels and refinement ratio, RL=4. The root level (L0) consists of a single grid shown in black wireframe while the next level (L1) consists of two grids, depicted in green wireframe and red wireframe respectively. The two grids at L1 are projected from the root level to illustrate that the cells underneath are “hidden.”","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"In VTK, the collection of AMR grids is stored in a vtkHierarchicalBoxDataSet data-structure. Each grid, G(Li,k), is represented by a vtkUniformGrid data structure where the unique key pair (Li,k) denotes the corresponding level (Li) and the grid index within the level (k) with respect to the underlying hierarchical structure. An array historically known as IBLANK, stored as a cell attribute in vtkUniformGrid, denotes whether a cell is hidden or not. The blanking array is subsequently used by the mapper to hide lower resolution cells accordingly when visualizing the dataset.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"To enable the execution of data queries without loading the entire dataset in memory, metadata information is employed. The metadata stores a minimal set of geometric information for each grid in the AMR hierarchy. Specifically, the AMR metadata, B(Li,k), corresponding to the grid G(Li,k), is represented using a vtkAMRBox object and it consists of the following information:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"N={Nx, Ny, Nz} — the cell dimensions of the grid (since the data is cell-centered)\nThe grid spacing at level L, hL={hx,hy,hz}\nThe grid level Li and grid index k\nThe global dataset origin, X=(X0, Y0, Z0), i.e., the minimum origin from all grids in level L0\nThe LoCorner and HiCorner, which describe the low and high corners of the rectangular region covered by the corresponding grid in a virtual integer lattice with the same spacing (h) that covers the entire domain.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"(Image: sample_2DAMR)","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"Given the metadata information stored in the AMR box of each grid, the refinement ratio at each level can be easily computed using relationship (1) from Table 1. Further, the cartesian bounds the corresponding grid covers and the number of points and cells is also available (see relationships 2-4 in Table 1). Notably, geometric queries such as determining which cell contains a given point, or if a grid intersects a user-supplied slice plane, can be answered using just the metadata.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"There is a vtkAMRDualExtractionFilter, which constructs a dual-mesh (i.e., the mesh constructed by connecting the cell-centers) over the computational domain. If we can directly tell ParaView that the mesh we have is a dual-mesh, then the initial trial with multi-block data may work directly.","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"AMRGaussianPulseSource","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"See Multi-Resolution Rendering with Overlapping AMR for the implementation of C++ reader in VTK.","category":"page"},{"location":"man/log/#Support-on-Derived-Variables-1","page":"Log","title":"Support on Derived Variables","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"Right now the derived quantity plots are not supported. In order to achieve this, I may need:","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"[x] A new function get_var(data, filehead, string) returning the derived variable\n[ ] A new plotting function that understands the derived data type","category":"page"},{"location":"man/log/#","page":"Log","title":"Log","text":"The first one is achieved by a trick I found on discourse, which basically identifies symbols as names to members in a struct. This test feature is not ideal and will be dropped in later versions.  This looks like the Python Calculator in ParaView. I don't know how ParaView achieve this, but in Python it is pretty easy to parse a string and execute it as some new codes using exec function, as Yuxi did in his interface to the yt library. Julia has equivalent metaprogramming capabilities, but there are many restrictions to apply it in practice so it is generally adviced to avoid evaluating expressions inside functions during runtime. Another option is to create functions for derived variables. This is actually pretty good both in terms of performance and conciseness. The idea is to create a dictionary of derived variable names as keys and anonymous functions as values, and if the input string is found in the dictionary, call the corresponding function to obtain the value. This has been successfully tested in my new scripts for processing Vlasiator outputs, and can be directly ported here for BATSRUS.","category":"page"},{"location":"man/log/#Extra-Notes-1","page":"Log","title":"Extra Notes","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"I have already made a lot of mistakes by mixing the row-major and column-major codes. Explicitly list all the parts that require extra care!","category":"page"},{"location":"man/log/#Todo-List-1","page":"Log","title":"Todo List","text":"","category":"section"},{"location":"man/log/#","page":"Log","title":"Log","text":"[x] Full coverage of tests\n[x] PyJulia support for manipulating data directly in Python\n[x] Derived variable support\n[x] General postprocessing script for concatenating and converting files.\n[x] Replace np.meshgrid with list comprehension\n[x] Drop the support for a long string containing several filenames; substitute by an array of strings.\n[ ] Find a substitution of triangulation in Julia\n[ ] Allow dot syntax to get dictionary contents (Base.convert?)\n[ ] Binary library support\n[ ] VTK reader","category":"page"}]
}
