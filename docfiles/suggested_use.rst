Suggested use
===============
Current implementation of autoBOT enables the user to explore multiple different representation spaces. However, the end-goal is to offer a tool which serves as a very strong baseline. To this end, the configuration below was shown to perform well across multiple benchmarks/shared tasks. Note that this configuration needs the `sentence-transformers` library (multilingual contextual representations).

.. code:: python3

	  
	import autoBOTLib
	import pandas as pd

	## Load example data frame
	dataframe = pd.read_csv("../data/insults/train.tsv", sep="\t")
	train_sequences = dataframe['text_a'].values.tolist()
	train_targets = dataframe['label'].values

	autoBOTLibObj = autoBOTLib.GAlearner(
		train_sequences,  # input sequences
		train_targets,  # target space 
		time_constraint=3,  # time in hours
		num_cpu="all",  # number of CPUs to use
		task_name="example test",  # task identifier
		scoring_metric = "f1", # sklearn-compatible scoring metric as the fitness.
		hof_size=3,  # size of the hall of fame
		top_k_importances=25,  # how many top features to output as final ranking
		memory_storage=
		"./memory",  # tripled base for concept features (see ./examples folder)
		representation_type="neurosymbolic")
		
	autoBOTLibObj.evolve(
			nind=10,  ## population size
			crossover_proba=0.6,  ## crossover rate
			mutpb=0.4)  ## mutation rate


The triplet knowledge bases can be downloaded from e.g., `https://github.com/totogo/awesome-knowledge-graph#knowledge-graph-dataset`. See the `autobot/examples` for more examples.
