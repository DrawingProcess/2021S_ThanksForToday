from soyspacing.countbase import CountSpace

model_fname = 'YOURS'
model = CountSpace()
#model.load_model(model_fname, json_format=False)
model.load_model(model_fname, json_format=True)

verbose=False
mc = 10  # min_count
ft = 0.3 # force_abs_threshold
nt =-0.3 # nonspace_threshold
st = 0.3 # space_threshold

sent = '이건진짜좋은영화 라라랜드진짜좋은영화'

# with parameters
sent_corrected, tags = model.correct(
    doc=sent,
    verbose=verbose,
    force_abs_threshold=ft,
    nonspace_threshold=nt,
    space_threshold=st,
    min_count=mc)

# without parameters
sent_corrected, tags = model.correct(sent)

print('before: %s' % sent)
print('after : %s' % sent_corrected)

# before: 이건진짜좋은영화 라라랜드진짜좋은영화
# after : 이건 진짜 좋은 영화 라라랜드진짜 좋은 영화