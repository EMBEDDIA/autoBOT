Using custom background knowledge
===============


One of the key novelties of *autoBOT* is the use of triplet-based graph databases as background knowledge (i.e. knowledge graphs). As shown in the examples, when doing the initialization:

.. code:: python3
	  
    autoBOTLibObj = autoBOTLib.GAlearner(
	    train_sequences,  # input sequences
		use_concept_features = True,
	    train_targets,  # target space 
	    memory_storage=
	    "./memory",  # tripled base for concept features
	    representation_type="neurosymbolic")  # or symbolic or neural

There is a dedicated parameter called *memory_storage*, which is a **path** that links to a list of files that contain triplets. You can use one or more gzipped tsv files! Example below.


 .. code-block:: text

	schlau	antonym	dumm
	schlau	antonym	naiv
	schlau	antonym	trottelig
	schlau	antonym	unwissend
	schlauerweise	antonym	blöderweise
	schlauerweise	antonym	dum


The databases are simple tab-separated subject-predicate-object triplets. The files need to be Gzipped (there can be more in the *memory* folder!).
