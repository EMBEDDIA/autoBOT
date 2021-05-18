Search.setIndex({docnames:["autoBOTLib","cli_usage","containerization","core_idea","custom_classifiers","custom_features","custom_knowledge","custom_metrics","ideas","index","installation","key_idea","model_persistence","modules","shared_tasks","source/autoBOTLib","source/modules","updates"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["autoBOTLib.rst","cli_usage.rst","containerization.rst","core_idea.rst","custom_classifiers.rst","custom_features.rst","custom_knowledge.rst","custom_metrics.rst","ideas.rst","index.rst","installation.rst","key_idea.rst","model_persistence.rst","modules.rst","shared_tasks.rst","source/autoBOTLib.rst","source/modules.rst","updates.rst"],objects:{"":{autoBOTLib:[15,0,0,"-"]},"autoBOTLib.baselines":{get_bert_base:[15,1,1,""],get_doc2vec:[15,1,1,""],get_lr_char_pipeline:[15,1,1,""],get_lr_word_char_pipeline:[15,1,1,""],get_lr_word_pipeline:[15,1,1,""],get_majority:[15,1,1,""],get_svm_char_pipeline:[15,1,1,""],get_svm_word_char_pipeline:[15,1,1,""],get_svm_word_pipeline:[15,1,1,""],get_tpot_word_pipeline:[15,1,1,""]},"autoBOTLib.conceptnet_features":{ConceptFeatures:[15,2,1,""]},"autoBOTLib.conceptnet_features.ConceptFeatures":{__init__:[15,3,1,""],concept_graph:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],get_propositionalized_rep:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.data_utils":{DataProcessor:[15,2,1,""],acc_and_f1:[15,1,1,""],compute_metrics:[15,1,1,""],genericProcessor:[15,2,1,""],pearson_and_spearman:[15,1,1,""],simple_accuracy:[15,1,1,""]},"autoBOTLib.data_utils.DataProcessor":{get_dev_examples:[15,3,1,""],get_labels:[15,3,1,""],get_train_examples:[15,3,1,""],read_pandas_tsv:[15,3,1,""]},"autoBOTLib.data_utils.genericProcessor":{get_dev_examples:[15,3,1,""],get_test_examples:[15,3,1,""],get_train_examples:[15,3,1,""]},"autoBOTLib.doc_similarity":{RelationalDocs:[15,2,1,""]},"autoBOTLib.doc_similarity.RelationalDocs":{__init__:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],get_graph:[15,3,1,""],jaccard_index:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.feature_constructors":{FeaturePrunner:[15,2,1,""],build_dataframe:[15,1,1,""],digit_col:[15,2,1,""],fast_screening_sgd:[15,1,1,""],get_affix:[15,1,1,""],get_autoBOT_manual:[15,1,1,""],get_features:[15,1,1,""],get_pos_tags:[15,1,1,""],get_simple_features:[15,1,1,""],get_subset:[15,1,1,""],parallelize:[15,1,1,""],remove_hashtags:[15,1,1,""],remove_mentions:[15,1,1,""],remove_punctuation:[15,1,1,""],remove_stopwords:[15,1,1,""],remove_url:[15,1,1,""],text_col:[15,2,1,""],ttr:[15,1,1,""]},"autoBOTLib.feature_constructors.FeaturePrunner":{__init__:[15,3,1,""],fit:[15,3,1,""],get_feature_names:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.feature_constructors.digit_col":{fit:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.feature_constructors.text_col":{__init__:[15,3,1,""],fit:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.helpers":{load_autobot_model:[15,1,1,""],store_autobot_model:[15,1,1,""]},"autoBOTLib.keyword_features":{KeywordFeatures:[15,2,1,""]},"autoBOTLib.keyword_features.KeywordFeatures":{__init__:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.metrics":{get_metric_report:[15,1,1,""]},"autoBOTLib.minimal_test":{TestClass:[15,2,1,""],load_model:[15,1,1,""],store_model:[15,1,1,""]},"autoBOTLib.minimal_test.TestClass":{__init__:[15,3,1,""],mutReg:[15,3,1,""],somefun:[15,3,1,""]},"autoBOTLib.minimal_test_load":{load_model:[15,1,1,""],store_model:[15,1,1,""]},"autoBOTLib.rakun":{RakunDetector:[15,2,1,""]},"autoBOTLib.rakun.RakunDetector":{__init__:[15,3,1,""],calculate_edit_distance:[15,3,1,""],calculate_embedding_distance:[15,3,1,""],corpus_graph:[15,3,1,""],find_keywords:[15,3,1,""],generate_hypervertices:[15,3,1,""],hypervertex_prunning:[15,3,1,""]},"autoBOTLib.sentence_embeddings":{documentEmbedder:[15,2,1,""]},"autoBOTLib.sentence_embeddings.documentEmbedder":{__init__:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.strategy_ga":{GAlearner:[15,2,1,""]},"autoBOTLib.strategy_ga.GAlearner":{__init__:[15,3,1,""],apply_label_map:[15,3,1,""],apply_weights:[15,3,1,""],compute_time_diff:[15,3,1,""],cross_val_scores:[15,3,1,""],custom_initialization:[15,3,1,""],evaluate_fitness:[15,3,1,""],evolve:[15,3,1,""],feature_type_importances:[15,3,1,""],generate_and_update_stats:[15,3,1,""],generate_id_intervals:[15,3,1,""],generate_random_initial_state:[15,3,1,""],get_feature_importance_report:[15,3,1,""],get_feature_space:[15,3,1,""],get_label_map:[15,3,1,""],instantiate_validation_env:[15,3,1,""],mode_pred:[15,3,1,""],mutReg:[15,3,1,""],parallelize_dataframe:[15,3,1,""],predict:[15,3,1,""],predict_proba:[15,3,1,""],probability_extraction:[15,3,1,""],prune_redundant_info:[15,3,1,""],report_performance:[15,3,1,""],return_dataframe_from_text:[15,3,1,""],softmax:[15,3,1,""],summarise_final_learners:[15,3,1,""],update_global_feature_importances:[15,3,1,""],update_intermediary_feature_space:[15,3,1,""],visualize_fitness:[15,3,1,""]},"autoBOTLib.topic_features":{TopicDocs:[15,2,1,""]},"autoBOTLib.topic_features.TopicDocs":{__init__:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],transform:[15,3,1,""]},"autoBOTLib.word_relations":{relationExtractor:[15,2,1,""]},"autoBOTLib.word_relations.relationExtractor":{__init__:[15,3,1,""],compute_distance:[15,3,1,""],fit:[15,3,1,""],fit_transform:[15,3,1,""],get_feature_names:[15,3,1,""],transform:[15,3,1,""],witem_kernel:[15,3,1,""]},autoBOTLib:{baselines:[15,0,0,"-"],conceptnet_features:[15,0,0,"-"],data_utils:[15,0,0,"-"],doc_similarity:[15,0,0,"-"],feature_constructors:[15,0,0,"-"],helpers:[15,0,0,"-"],keyword_features:[15,0,0,"-"],metrics:[15,0,0,"-"],minimal_test:[15,0,0,"-"],minimal_test_load:[15,0,0,"-"],rakun:[15,0,0,"-"],sentence_embeddings:[15,0,0,"-"],strategy_ga:[15,0,0,"-"],topic_features:[15,0,0,"-"],word_relations:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"001":4,"0036820174140975":3,"100":5,"1000":[0,15],"10000":[0,15],"112_0":3,"126_0":3,"128":[0,15],"13_1":3,"183_0":3,"1965123":[0,15],"2019":[0,15],"2020":[0,15],"2021":[0,15],"2048":[0,15],"217_1":3,"223_0":3,"244_0":3,"2565542438450016":3,"259_1":3,"271_0":3,"27482709838903063":3,"2811283792683306":3,"3000000":[0,15],"311_1":3,"321_0":3,"323":14,"323_1":3,"335_0":3,"337_0":3,"36_1":3,"391_1":3,"4096":[0,15],"4124583243111468":3,"414_1":3,"4983623274641806":3,"512":[0,15],"5351954677290582":3,"54324":[0,15],"72_0":3,"8954":[0,15],"89_1":3,"91_1":3,"boolean":[0,15],"char":5,"class":[0,4,5,15],"default":[0,1,3,14,15,17],"final":[0,3,4,5,8,11,12,15],"float":[0,15],"function":[0,1,3,5,8,10,15],"import":[0,3,4,5,7,11,12,15],"int":[0,15],"long":[0,15],"new":[0,5,14,15],"return":[0,15],"true":[0,3,5,6,15],"try":10,"while":11,Added:17,Adding:8,For:3,One:[0,2,6,15],POS:11,The:[0,1,3,4,5,6,11,12,15],There:6,These:4,Use:7,Using:9,__init__:[0,15],about:9,abov:5,abs:[0,15],acc:12,acc_and_f1:[0,15],access:[3,17],accord:[5,6],account:[0,15],accur:[0,15],accuraci:7,acontextu:6,across:[0,15],act:3,activ:[6,17],actual:[0,15],addit:[0,15],adjusted_mutual_info_scor:7,adjusted_rand_scor:7,adopt:[2,11],affix:[0,15],africa:14,against:11,aggreg:[0,15],ai4d:14,algorithm:[0,11,15],alik:[0,15],all:[0,3,12,15],all_embed:[0,15],all_predict:[0,15],alpha:[0,4,15],also:[10,14],amazonaw:[0,15],amount:11,analyz:5,ani:[0,2,5,7,8,15],antonym:3,apart:5,api:[5,8],append:5,appli:[0,15],apply_label_map:[0,15],apply_weight:[0,15],approach:[0,11,15],approxim:[0,15],arbitrari:[0,15],argument:[1,7],around:3,arrai:4,art:11,ask:3,ass:3,assembl:[0,15],assert:[0,15],assum:[0,5,12,15],autobot:[0,3,6,7,8,10,14,15],autobotlib:[4,5,6,9,10,12],autobotlibmodel:1,autobotlibobj:[3,4,5,6,11,12],autom:11,automat:[9,11],automl:[0,9,11,15],averag:[0,15],average_precis:7,awai:[3,8],azz:3,back:[0,3,15],background:[0,9,15],bad:3,bag:11,balanced_accuraci:7,base:[0,1,2,3,5,6,8,11,12,15,17],baseestim:[0,15],baseextim:[0,15],baselin:[9,13,16],basi:11,basic:[3,8],been:11,befor:[0,15],believ:8,benchmark:17,bert:[0,11,15],beta:3,between:[0,15],bigram:[0,15],bin:[0,15],binarize_import:[0,15],blaz:[0,15],boost:8,both:11,bound:[0,15],box:8,branch:[10,11],build:[0,15],build_datafram:[0,15],calculate_edit_dist:[0,15],calculate_embedding_dist:[0,15],call:[1,6,8],can:[1,2,3,5,6,7,8,10,11],capabl:[0,3,15],capableof:6,challeng:14,chang:17,char_featur:[3,5],char_features_cusom:5,char_tfidf_bigram:5,classic:[0,15],classif:[0,9,11,12,14,15],classifc:[0,15],classifi:[0,1,3,8,9,15],classifier_hyperparamet:[0,4,15],classifier_preset:[0,15],clf:[0,15],clf_type:[0,15],cli:9,code:[0,1,2,10,15,17],codebas:17,collect:[0,15],column:[0,6,15],com:[0,3,10,15],combine_with_existing_represent:[0,5,15],comdotatdotcom:6,come:3,compar:[0,11,15],compat:[0,3,4,7,15],competit:[11,14],completeness_scor:7,comprehend:[0,15],comput:[0,12,15],compute_dist:[0,15],compute_metr:[0,12,15],compute_time_diff:[0,15],concept:[3,6,12],concept_featur:[0,3,15],concept_graph:[0,15],conceptfeatur:[0,15],conceptnet:[0,3,6,12,15],conceptnet_featur:[9,13,16],conceptnet_url:[0,15],conda:10,conda_env:10,conduct:11,configur:17,consequ:[0,15],consid:[0,8,15],consist:11,constantli:[0,15],constrain:[0,15],constraint:5,construct:[0,15],constructor:5,contain:[0,3,6,9,15],container:2,content:[9,13,16],context:6,contextu:[6,9],continuum:[0,15],contributor:6,convert:[0,15],core:[0,10,15],corpu:[0,15],corpus_graph:[0,15],correspond:[0,15],could:[8,17],cpu:[0,3,4,12,15],creat:[0,10,15],cross:[0,15],cross_val_scor:[0,15],crossov:[0,3,4,12,15],crossover_proba:[0,3,4,12,15],crossover_r:1,csv:[0,15],current:[0,5,8,10,15],custom:[0,9,15],custom_classifi:4,custom_featur:5,custom_feature_matrix:[0,15],custom_feature_spac:[0,15],custom_initi:[0,15],custom_pipelin:[0,15],custom_spac:[0,15],custom_transformer_pipelin:[0,5,15],cutoff:[0,15],cycl:1,data:[0,1,3,4,5,8,11,12,15],data_dict:[0,15],data_dir:[0,15],data_doc:[0,15],data_matrix:[0,15],data_util:[9,13,16],databas:[0,6,15],datafold:1,datafram:[0,3,4,5,11,12,15],dataframe2:[5,11,12],dataprocessor:[0,15],dataset:6,datasetsher:2,deal:[0,15],decod:[0,15],dedic:6,default_import:[0,15],defin:[1,5],delimit:[0,15],demonstr:[5,12],denot:[0,15],deploy:[0,15],derivedfrom:6,describ:[0,15],detail:[0,15],dev:[0,15],dev_sequ:[0,15],dev_target:[0,15],develop:[0,15],df_data:[0,15],dfx:[0,15],dict:[0,15],dict_kei:7,differ:[0,9,15,17],digit_col:[0,15],dimens:[0,15],directli:[0,1,10,15],directori:10,discuss:8,dist:[0,15],distanc:[0,15],distance_method:[0,15],distance_threshold:[0,15],distribut:[0,15],doc2graph:3,doc2vec:[0,15],doc_limit:[0,15],doc_similar:[9,13,16],document:[0,8,11,15,17],document_spac:[0,15],documentembedd:[0,15],doe:8,doing:6,domain:8,down:5,download:[0,3,15],drastic:8,dumb:3,dure:[0,15],each:[0,4,15],easili:5,ed_cutoff:[0,15],edg:[0,15],editdist:[0,15],effici:[0,15],either:[0,15],elasticnet:4,element:[0,15],embed:[0,11,15],embedding_dim:[0,15],emphasi:[0,15],emploi:[0,15],encod:[0,15],end:[0,15],ensembl:[3,11],env:10,equip:[0,15],estim:[0,15],etc:[5,8],evalu:[0,15],evaluate_fit:[0,15],evolut:[0,3,4,5,9,11,12,15],evolutionari:11,evolv:[0,3,4,5,9,11,12,15],exact:[0,15],exampl:[1,3,4,5,6,8,11,12],example_insults_model:12,exec:2,execut:[0,1,15],exist:9,exit:1,expens:11,experi:[0,1,15],explain:[3,9,11],explained_vari:7,explan:[0,3,15],exploit:[0,5,15],explor:[0,3,4,5,11,15,17],extend:9,extens:[0,9,15],extern:[0,15],extract:[0,15],f1_acc:12,f1_macro:7,f1_micro:7,f1_perf:[0,15],f1_sampl:7,f1_weight:7,fake:3,fals:[0,5,15],fame:[0,3,4,12,15],far:3,fast:4,fast_screening_sgd:[0,15],featur:[0,3,4,6,9,11,12,15,17],feature_constructor:[5,9,13,16],feature_extract:5,feature_rank:[0,15],feature_type_import:[0,3,15],featureprunn:[0,15],feel:14,few:6,file:[0,1,6,10,15],final_learn:3,final_run:[0,15],find_keyword:[0,15],fine:17,first:[0,3,6,9,15],first_run_task_nam:12,fit:[0,3,5,15],fit_transform:[0,5,15],fitnessexampl:[0,15],flag:5,folder:[1,3,10,12],follow:[0,1,2,3,4,5,6,7,15],form:[0,15],format:6,found:[7,10],fourteen:11,fowlkes_mallows_scor:7,frame:[3,4,5,11,12],free:14,frequent:[0,15],from:[0,1,4,5,7,8,10,11,15],front:8,fuc:3,full:1,fulli:3,func:[0,15],further:[0,9,12,15],fuzzi:[0,15],galearn:[0,3,4,5,6,11,12,15],gen:[0,15],gener:[0,2,9,15],generate_and_update_stat:[0,15],generate_hypervertic:[0,15],generate_id_interv:[0,15],generate_random_initial_st:[0,15],genericprocessor:[0,15],get:[0,15],get_affix:[0,15],get_autobot_manu:[0,15],get_bert_bas:[0,15],get_dev_exampl:[0,15],get_doc2vec:[0,15],get_featur:[0,15],get_feature_importance_report:[0,15],get_feature_nam:[0,5,15],get_feature_spac:[0,15],get_graph:[0,15],get_label:[0,15],get_label_map:[0,15],get_lr_char_pipelin:[0,15],get_lr_word_char_pipelin:[0,15],get_lr_word_pipelin:[0,15],get_major:[0,15],get_metric_report:[0,15],get_pos_tag:[0,15],get_propositionalized_rep:[0,15],get_simple_featur:[0,15],get_subset:[0,15],get_svm_char_pipelin:[0,15],get_svm_word_char_pipelin:[0,15],get_svm_word_pipelin:[0,15],get_test_exampl:[0,15],get_tpot_word_pipelin:[0,15],get_train_exampl:[0,15],git:10,github:[3,10],given:[0,1,3,8,11,15],global:3,global_dist:[0,15],glue:12,good:4,granular:9,graph:[0,6,11,15,17],graph_path:[0,15],ground:[0,15],hall:[0,3,4,12,15],hard:[0,15],hardwar:11,has:11,hashtag:[0,15],have:[0,5,11,15],hd_search:[0,15],help:[0,1,15],helper:[9,13,16],here:[0,15],hing:4,hof:[0,15],hof_siz:[0,1,3,4,12,15],homogeneity_scor:7,hour:[0,3,4,12,15],how:[0,3,4,5,8,11,12,15],howev:[4,17],http:[0,3,10,14,15],human:[0,15],hundr:11,hyperparamet:[0,4,11,15],hypervertex_prun:[0,15],hypervertic:[0,15],idea:9,identifi:[0,3,4,12,15],idf:[0,15],idiot:3,ignor:3,image_path:[0,3,15],imagenam:2,implement:[1,4,5,8],implic:8,importances_glob:3,importances_loc:3,improv:[0,9,15],includ:[0,3,5,8,9,11,15],include_concept_featur:[0,3,15],inclus:8,increas:[0,15],independ:[0,15],index:[0,15],indice_list:[0,15],individu:[0,3,15],induc:[0,15],industri:11,info:[0,15],inform:[0,3,8,15],initi:[0,6,7,15],initial_separate_spac:[0,15],input:[0,3,4,6,11,12,15],input_data:[0,15],input_fil:[0,15],input_typ:[0,15],inputexampl:[0,15],inspect:[0,3,5,11,15,17],instal:9,instanc:[0,15],instanti:[0,15],instantiate_validation_env:[0,15],instead:[0,5,11,15],institut:[0,15],insult:[1,3,4,5,11,12],integ:[0,15],interest:[5,9],interv:[0,15],introduc:3,invers:[0,15],inverse_label_map:[0,15],involv:8,its:[3,5],itself:1,jaccard:[0,7,15],jaccard_index:[0,15],jaccard_macro:7,jaccard_micro:7,jaccard_sampl:7,jaccard_weight:7,jaccardindex:[0,15],jerk:3,join:5,jointli:11,jozef:[0,15],kei:[0,5,6,7,9,15],kernel:[0,15],key1:[0,15],key2:[0,15],keyword:[0,5,11,15],keyword_featur:[3,9,13,16],keywordfeatur:[0,15],kid:3,knowledg:[0,9,11,15],knowledge_graph:[0,15],l1_ratio:4,label:[0,3,4,5,11,12,15],label_map:[0,15],languag:11,language_fil:[0,15],larg:11,last:[0,15],latent:[0,15],latent_dim:[0,15],layer:3,learn:[0,1,5,9,11,15],learnabl:[0,15],learner:[0,4,8,11,15],lemmat:[0,15],let:[3,5,12],level:[3,11],liar:3,librari:[1,9,10,17],licens:6,lightweight:[0,15],like:[0,5,6,15],limit:11,limit_rang:[0,15],linear:[0,8,15],linear_model:4,link:[6,14],list:[0,5,15],listr:[0,15],ljubljana:[0,15],load:[0,3,4,5,11,12,15],load_autobot_model:[0,12,15],load_model:[0,1,15],locat:[0,15],log:[0,15],loop:[0,15],loser:3,loss:4,lot:[1,6],low:11,lower:[0,15],ltl:[0,15],made:[0,15],main:[0,1,15],make:[0,1,11,15],malavi:14,malawi:14,mani:[0,3,4,12,15],map:[0,15],master:[3,10],match:[0,15],matplotlib:[3,4],matrix:[0,15],matter:[0,6,15],matter_lot:6,max:[0,15],max_error:7,max_featur:[0,5,15],max_num_feat:[0,15],maxim:[0,15],maximum:[0,15],maxvot:[0,15],memori:[0,3,4,6,12,15],memory_loc:[0,15],memory_storag:[0,3,4,6,12,15],mention:[0,15],messag:1,meta:[9,11],method:[0,11,15],methodolog:[0,15],metric:[3,9,13,16],million:11,min_char:[0,15],min_token:[0,15],mini:[0,15],minim:[3,12],minimal_test:[9,13,16],minimal_test_load:[9,13,16],minimum:[0,15],mlj:[0,15],mode:1,mode_pr:[0,15],model:[0,1,3,4,9,11,15],model_class:[0,15],model_skeleton:[0,15],modul:[9,13,16],modular:5,monitor:[0,15],more:[0,3,8,11,15],moreov:11,moron:3,most:[0,5,8,15],mouth:3,multi:8,multiclass:[0,15],multilingu:17,multiobject:[0,15],must:[0,5,15],mutat:[0,3,4,12,15],mutation_r:1,mutpb:[0,3,4,12,15],mutreg:[0,15],mutual_info_scor:7,n_cpu:[0,15],n_fold_cv:[0,15],name:[0,7,14,15],natur:[0,8,15],ndim:[0,15],necessari:5,need:[0,5,6,15],neg_brier_scor:7,neg_log_loss:7,neg_mean_absolute_error:7,neg_mean_absolute_percentage_error:7,neg_mean_gamma_devi:7,neg_mean_poisson_devi:7,neg_mean_squared_error:7,neg_mean_squared_log_error:7,neg_median_absolute_error:7,neg_root_mean_squared_error:7,neighborhood_token:[0,15],neural:[0,3,4,6,9,11,12,15],neural_features_v1:3,neural_features_v2:3,neurosymbol:[0,1,3,4,5,6,15,17],new_docu:[0,15],new_target:[0,15],next:[0,3,5,12,15],ngram_rang:5,nind:[0,3,4,12,15],no_stopword:5,node1:[0,15],node2:[0,15],node:[0,15],non:11,none:[0,15],normalized_mutual_info_scor:7,notabl:8,note:[0,1,5,6,15,17],noth:3,novel:8,novelti:6,now:3,num_cpu:[0,1,3,4,12,15],number:[0,3,4,12,15],numer:[0,15],object:[0,3,5,6,8,15],obtain:[0,1,3,12,15],offer:[8,9,11],omc:6,omcs1_possibly_free_text:6,one:[0,5,8,15,17],ones:[0,5,8,15],onli:[0,5,6,15],open:14,oper:[0,1,15],optim:[0,4,9,11,12,15],option:1,order:2,origin:[0,15],other:[0,3,14,15],otr:3,out:8,output:[0,1,3,4,12,15],output_fold:1,overal:[0,15],own:6,packag:[9,13,16],page:14,pair:[0,15],pair_diff_max:[0,15],panda:[0,3,4,5,11,12,15],paper:[0,11,15],parallel:[0,15],parallelize_datafram:[0,15],param:[0,15],paramet:[0,6,11,15],pareto:8,pars:[0,15],part:[0,5,11,15],particular:[0,15],past:14,path:[0,6,15],pearson_and_spearman:[0,15],penalti:4,percent:14,percentile_threshold:[0,15],perform:[0,8,9,11,12,15],persist:9,phase:9,pickl:[0,1,12,15],piec:[0,15],pig:3,pip:10,pipelin:5,placement:14,pleas:[3,14,17],plt:[3,4],png:[0,3,15],point:8,popsiz:1,popul:[0,3,4,12,15],pos:[0,15],pos_featur:3,possibl:[0,8,15,17],potenti:[9,11],power:5,pre:[11,12],precis:7,precision_macro:7,precision_micro:7,precision_sampl:7,precision_weight:7,pred:[0,15],pred_matrix:[0,15],predic:6,predict:[0,1,5,11,12,15],predict_data:1,predict_proba:[0,15],prediction_matrix:[0,15],prediction_vector:[0,15],preprocess:[0,15],present:11,pretrain:[0,15],pretrained_path:[0,15],prinout:[0,15],print:[0,3,7,12,15],printout:[0,15],prior:[0,8,15],prob_df:[0,15],probability_extract:[0,15],probabl:[0,15],procedur:11,process:6,processor:[0,15],promis:11,properti:3,proport:[0,15],propos:11,provid:[6,10],prp:3,prune_redundant_info:[0,15],pull:14,punctuat:[0,15],purpos:[0,15],put:5,pyplot:[3,4],python:[1,2,10],rakun:[9,13,16],rakundetector:[0,15],rand_scor:7,random:[0,15],random_se:[0,15],rank:[0,3,4,12,15],rate:[3,4,12],ratio:[0,15],read_csv:[3,4,5,11,12],read_pandas_tsv:[0,15],real:[0,3,11,15],recal:7,recall_macro:7,recall_micro:7,recall_sampl:7,recall_weight:7,redund:[0,15],refit:[0,15],refresh:[0,15],regress:[0,15],regular:[0,15],relat:[0,3,11,15],relatedto:3,relational_featur:3,relationaldoc:[0,15],relationextractor:[0,15],releas:9,relev:[0,3,15],remain:17,rememb:[0,15],remov:[0,15],remove_hashtag:[0,15],remove_ment:[0,15],remove_punctu:[0,15],remove_stopword:[0,15],remove_url:[0,15],replac:[0,15],replace_token:[0,15],repo:[10,12],report:[0,15],report_perform:[0,15],repres:8,represent:[0,4,9,11,15],representation_typ:[0,1,3,4,5,6,12,15,17],request:14,requir:[10,11],reset:[0,15],resourc:[6,11],respons:[0,15],result:[1,3,8,11,14],retard:3,return_clf_and_vec:[0,15],return_dataframe_from_text:[0,15],right:3,roberta:11,roc_auc:7,roc_auc_ovo:7,roc_auc_ovo_weight:7,roc_auc_ovr:7,roc_auc_ovr_weight:7,root:10,row:[0,15],run:[0,1,2,10,11,14,15],sai:5,same:[8,12],scale:[0,15],scenario:[8,11],scienc:11,scikit:5,score:[0,3,15],scorer:7,scoring_metr:[0,3,7,15],scratch:5,script:1,seaborn:[3,4],second:[0,15],see:[0,5,8,15,17],seed:[0,15],select:[0,15],self:[0,15],sens:1,sentenc:[0,8,15],sentence_embed:[9,13,16],sep:[3,4,5,11,12],separ:[0,15],sequenc:[0,3,4,6,12,15],seri:5,serv:[11,14],set1:[0,15],set2:[0,15],set:[0,8,14,15,17],setup:10,sgd:8,sgdclassifi:4,sgn:[0,15],share:9,should:[4,8],show:1,showcas:12,shown:[6,11],signatur:[0,15],simpl:[0,12,15],simple_accuraci:[0,15],simplest:2,simpli:[6,12],singular:9,size:[0,3,4,12,15],skblaz:[3,10],sklearn:[0,3,4,5,7,15],skrlj:[0,15],smug:3,snippet:4,sns:[3,4],softmax:[0,15],solut:[0,8,11,15],solution_index:[0,15],some:[0,5,12,15],somefun:[0,15],someset:2,somewher:14,sourc:6,space:[0,3,4,6,8,9,11,12,15],spars:11,sparsiti:[0,15],specif:10,specifi:[0,4,5,15],speed:9,split:[0,15],split_char:[0,15],stabl:10,stai:3,standard:[0,15],start:4,starting_feature_numb:[0,15],stat:[0,15],state:11,statist:[0,15],stefan:[0,15],stemmer:[0,15],step:[8,9,11],stfu:3,stop:[0,15],stopping_interv:[0,15],stopword:[0,15],storag:[0,14,15],store:[0,3,12,15],store_autobot_model:[0,12,15],store_model:[0,15],stored_model:12,str:[0,15],strategi:[0,4,12,15],strategy_ga:[9,13,16],strategy_random_search:[9,13,16],stream:5,streamlin:1,string:[0,15],stupid:3,subject:[6,11],sublinear_tf:5,submodul:[9,13,16],subset:[0,15],subspac:3,subword:11,suit:10,suitabl:[0,2,4,8,11,15],summarise_final_learn:[0,3,15],suppli:[0,15],surfaceend:6,surfacestart:6,surfacetext:6,symbol:[0,3,4,6,12,15],syntax:4,system:9,tabl:[0,3,15],tag:[0,11,15,17],taken:[0,15],target:[0,3,4,6,12,15],task:[0,3,4,5,9,11,12,15],task_nam:[0,3,4,12,15],tch:3,tell:3,temporari:[0,15],test:[1,3,4,5,10,11,12],test_predict:1,test_sequ:[5,11,12],test_target:12,testclass:[0,15],tex:6,text:[0,5,9,11,15],text_a:[3,4,5,11,12],text_col:[0,5,15],text_list:[0,15],text_vector:[0,15],textlabel:[0,15],tfidf_char_bigram:5,tfidf_word_unigram:5,tfidfvector:5,thei:11,them:[0,2,5,15],thi:[0,1,2,4,5,6,8,11,14,15],thread:[0,15],throughout:11,time:[0,1,3,4,12,15],time_constraint:[0,3,4,5,11,12,15],tldr:11,tmp_feature_spac:[0,15],tmp_space:[0,15],token:[0,11,15],token_dict:[0,15],toler:[0,15],tolist:[3,4,5,12],tool:[1,2],top:[0,3,4,12,14,15],top_k_accuraci:7,top_k_import:[0,3,4,12,15],topic_featur:[9,13,16],topic_token:[0,15],topicdoc:[0,15],trace:3,tradeoff:9,train:[0,1,3,4,5,11,12,15],train_sequ:[0,3,4,5,6,11,12,15],train_sequences_raw:[0,15],train_target:[0,3,4,5,6,11,12,15],train_val:[0,15],transfer:[9,11],transform:[0,3,8,9,15],transformedobj:[0,15],transformedobject:[0,15],transformermixin:[0,15],travers:[0,8,15],tree:3,tripl:[3,6,12],triplet:[0,6,15],tsv:[1,3,4,5,11,12],ttr:[0,15],tune:11,tutori:9,tweet:[0,15],two:[0,1,3,5,11,15],txt:[0,10,12,15],type:[0,11,15],uck:3,underli:[0,9,15],uniform:[0,15],uniqu:[0,15],unpickl:[0,15],unpickled_model:[0,15],updat:[0,15],update_global_feature_import:[0,15],update_intermediary_feature_spac:[0,15],url:[0,15],usag:1,use:[0,1,2,3,4,5,6,7,8,12,15],use_conc_doc:[0,15],use_concept_featur:6,usecas:[3,12],used:[0,3,8,15,17],useful:[0,5,15],uses:4,using:8,v_measure_scor:7,val:[0,15],valid:[0,15],validation_typ:[0,15],valu:[0,3,4,5,12,15],vanilla:4,variou:[0,4,11,14,15],vbp:3,vector:[0,8,15],verbos:[0,15],veri:[0,2,11,12,15],version:[0,8,10,15,17],via:[0,2,8,10,15],virtual:10,visual:[0,3,15],visualize_fit:[0,3,15],vmlj:17,wai:[2,3,5],warranti:[0,15],weight:[0,6,15],weights_import:[0,15],well:[10,11],what:17,when:[0,6,7,11,15],where:[0,3,8,11,15],whether:[0,10,15],which:[0,2,3,5,6,15],why:5,wide:[4,11],wikiparsec:6,wiktionari:6,wish:[4,5],witem_kernel:[0,15],witem_separ:[0,15],without:[0,15],word:11,word_featur:[3,5],word_features_custom:5,word_rel:[9,13,16],word_tfidf_unigram:5,work:[0,1,2,9,10,15,17],workflow:[0,15],world:11,would:5,wrapper:1,wspace:[0,15],y_predict:[0,15],y_true:[0,15],yield:[0,7,11,15],yml:10,you:[2,3,4,5,6,7,10,12,14],your:[4,5,6,14],zindi:14},titles:["autoBOTLib package","autoBOTLib CLI","Singularity container for autoBOT","autoBOTLib library","Using custom classifiers","Using custom feature transformers","Using custom background knowledge","Using custom metrics","Potentially interesting further work","Welcome to <em>autoBOT</em>\u2019s documentation","Installation","Key idea underlying autoBOTLib","Model persistence","autoBOTLib","Performance on shared tasks","autoBOTLib package","autoBOTLib","Releases"],titleterms:{Using:[4,5,6,7],autobot:[2,9],autobotlib:[0,1,3,11,13,15,16],background:6,baselin:[0,15],classif:8,classifi:4,cli:1,conceptnet_featur:[0,15],contain:2,content:[0,15],contextu:8,custom:[4,5,6,7],data_util:[0,15],doc_similar:[0,15],document:9,evolut:8,exist:5,extend:5,extens:8,featur:5,feature_constructor:[0,15],further:8,helper:[0,15],idea:11,improv:8,instal:10,interest:8,kei:11,keyword_featur:[0,15],knowledg:6,learn:8,librari:3,meta:8,metric:[0,7,15],minimal_test:[0,15],minimal_test_load:[0,15],model:12,modul:[0,15],neural:8,packag:[0,15],perform:14,persist:12,phase:8,potenti:8,rakun:[0,15],releas:17,represent:8,sentence_embed:[0,15],share:14,singular:2,space:5,speed:8,strategy_ga:[0,15],strategy_random_search:[0,15],submodul:[0,15],task:14,topic_featur:[0,15],transfer:8,transform:5,underli:11,welcom:9,word_rel:[0,15],work:8}})