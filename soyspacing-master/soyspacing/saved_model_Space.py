from soyspacing.countbase import CountSpace

corpus_fname = '../demo_model/134963_norm.txt'
model = CountSpace()
model.train(corpus_fname)

model_fname = 'YOURS'
# model.save_model(model_fname, json_format=False)
model.save_model(model_fname, json_format=True)