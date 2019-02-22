#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
Marked Point Process Learning via EM algorithm
'''

import sys
import arrow
import utils
import numpy as np
import plot
from mppem import MPPEM
from gensim import corpora, models

# burglary_with_random_indice   = list(range(0, 50))
# pedrobbery_with_random_indice = list(range(3700, 3900))
# others_with_random_indice     = list(range(10000, 10056))
# indice = burglary_with_random_indice + pedrobbery_with_random_indice + others_with_random_indice

'''
t = time matrix (N x 2)
s = spatial matrix (N x 1)

'''
def run_point_process(s, t):

    retrieval_range = np.linspace(100, 1000, 51).astype(np.int32)
    n= 10056
    epochs= 1
    iters= 5

    # init results
    precisions = []
    recalls    = []

    # in order to save time, do the initialization of mu one-time at first
    init_em = MPPEM(seq_t=t, seq_s=s)


    # OLD STUFF FOR EM FIT (DONT NEED?)


    # init A
    # distance_matrix = utils.calculate_beats_pairwise_distance(u_set, csv_filename)
    # init_em.init_A(distance_matrix, gamma=1.)

    # init Mu
    # init_em.init_Mu(gamma=1.)

    # experiments
    # for N in retrieval_range:
    #     precision = []
    #     recall    = []
    #     print('---------N = %d ----------' % N)
    #     for e in range(epochs):
    #         em = MPPEM(seq_t=t, seq_s=s)
    #         em.Mu = init_em.Mu
    #         em.A  = init_em.A
    #         ps, rs, _, _ = em.fit(T=t[-1], tau=t[0], iters=iters, first_N=N, specific_labels=specific_labels)
    #         # p, r = utils.retrieval_test(m, l, specific_labels=specific_labels, first_N=N, is_random=False)
    #         # print(p, r)
    #         precision.append(ps[-1])
    #         recall.append(rs[-1])
    #     precisions.append(precision)
    #     recalls.append(recall)
    #
    # # save exp results
    # np.savetxt("result/sttpp+svd_%s_precision_N_from%dto%d.txt" % (category, min(retrieval_range), max(retrieval_range)), precisions, delimiter=',')
    # np.savetxt("result/sttpp+svd_%s_recalls_N_from%dto%d.txt" % (category, min(retrieval_range), max(retrieval_range)), recalls, delimiter=',')


if __name__ == '__main__':
    # np.random.seed(0)
    # np.set_printoptions(suppress=True)

    # visualize data on map
    # visualize_on_map(category='other', n=10056)

    # exp_alpha(
    #     alpha_range=np.linspace(0, 20, 51), beta=1e+2, gamma=1.,
    #     category='robbery', epoches=3, iters=1)
    # exp_alpha(
    #     alpha_range=np.linspace(0, 20, 51), beta=1e+2, gamma=1.,
    #     category='burglary', epoches=3, iters=1)
    # exp_alpha(
    #     alpha_range=np.linspace(0, 20, 51), beta=1e+2, gamma=1.,
    #     category='other', epoches=3, iters=1)

    # exp_convergence(beta_1=1., beta_2=1e+2, alpha=1e+2, category='burglary', epoches=1, iters=25, n=350)
    exp_baselines(
        retrieval_range=np.linspace(100, 1000, 51).astype(np.int32),
        n=10056, category='robbery', epoches=2)
    exp_baselines(
        retrieval_range=np.linspace(100, 1000, 51).astype(np.int32),
        n=350, category='burglary', epoches=2)
    exp_baselines(
        retrieval_range=np.linspace(100, 1000, 51).astype(np.int32),
        n=10056, category='other', epoches=2)
