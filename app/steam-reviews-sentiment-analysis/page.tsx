"use client";
import DocSidebar from "../components/sidebar";

export default function SteamReviewsSentimentAnalysis() {
  return (
    <div className="relative min-h-screen text-black dark:text-white">
      <div className="relative z-10 mx-auto flex items-start px-6 sm:px-8 lg:px-20 py-24 max-w-screen-xl">
        
        {/* ─────────── Sidebar ─────────── */}
        <DocSidebar
          items={[
            { id: "overview", label: "Overview" },
            { id: "goals", label: "Goals" },
            { id: "data", label: "Data" },
            { id: "vectorization", label: "Feature Vectorization" },
            { id: "modeling", label: "Modeling" },
            { id: "visuals", label: "Visualizations" },
            { id: "bert", label: "BERT Analysis" },
            { id: "testplan", label: "Test Plan" },
            { id: "links", label: "Project Links" },
          ]}
        />



        {/* ─────────── Main Content ─────────── */}
        <main className="flex-1 prose prose-lg dark:prose-invert max-w-none">
          
          <h1 id="overview" className="text-4xl font-bold mb-6 scroll-mt-27">Steam Review Sentiment Analysis</h1>
            <p>
              Steam is a massive online marketplace known for its review system,
              where players can recommend or not recommend games. Our project focuses
              on analyzing the sentiment of these reviews to understand what features
              push reviews toward being positive or negative.
            </p>

          <section id="goals"className="scroll-mt-27" >
            <h2 className="text-3xl font-semibold mt-12">Goals</h2>
            <p>
              We aim to examine linguistic features in Steam reviews—such as keywords,
              phrasing, and descriptive sentiment—and determine how strongly they
              correlate with a positive recommendation.
            </p>
          </section>

          <section id="data" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Data</h2>
            <p>
              We used the Kaggle Steam Review Dataset, which provides review text,
              metadata, game titles, and helpfulness scores. Preprocessing involved
              selecting English reviews and (eventually) restricting to reviews with a
              weighted helpfulness score above 0.8 for quality.
            </p>
          </section>

          <section id="vectorization" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Feature Vectorization</h2>
            <p>
              Several text processing approaches were tested: Bag of Words, TF-IDF,
              Latent Semantic Analysis, and VADER. TF-IDF performed best for our
              classical models, while LSA introduced correlation among features that
              degraded Naive Bayes performance.
            </p>

            {/* KEEPING IMAGE REFERENCES */}
            <div>
              <img src="/assets/topN.png" alt="Top words for Naive Bayes" className="w-full rounded-lg my-6" />
            </div>

            <p>Additional visualizations such as word clouds and bar charts were generated:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="/assets/payday2_all_wordcloud.png" />
              <img src="/assets/Payday2_allwords_bar.png" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="/assets/payday2_adj.png" />
              <img src="/assets/payday2_adj_bar.png" />
            </div>
          </section>

          <section id="modeling" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Modeling</h2>
            <p>
              We explored Naive Bayes, logistic regression, linear regression, and BERT.
              Classical models struggled, especially due to the overwhelmingly positive
              distribution of reviews. BERT emerged as the strongest model by far,
              achieving:
            </p>

            <ul>
              <li><strong>Accuracy:</strong> 0.938</li>
              <li><strong>F1-Score:</strong> 0.967</li>
            </ul>
          </section>

          <section id="visuals" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Visualizations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="/assets/median_rev_len_vs_vote_status.png" />
              <img src="/assets/scatter.png" />
            </div>

            <p>
              t-SNE plots further confirmed that positive and negative reviews do not
              form easily separable clusters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="/assets/2dSNE.png" />
              <img src="/assets/3dSNE.png" />
            </div>
          </section>

          <section id="bert" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">BERT Attention Analysis</h2>
            <p>
              Analyzing BERT’s attention heads helped reveal which word relationships
              the model emphasized. In many cases it captured meaningful semantic links,
              though text art confused it due to uniform symbols.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <img src="/assets/layer_7_sample_sentence.jpg" />
              <img src="/assets/review_art.jpg" />
            </div>
            <p>
              Here is a classification matrix of the BERT model on a random sample of 10000 reviews (the classification matrix took extremely long to load) and some performance metrics. 
              Unfortunately, it seems that the model does not handle negative reviews very well. That is, there are many false positives in the confusion matrix and the model appears to
              guess that the review is positive almost all of the time. There may be some room for optimism, as the testing accuracy on the whole testing set and f1-score were 0.938 and 0.967 respectively.
            </p>
            <div className="my-6">
              <img src="/assets/bert_confusion_matrix.jpg" className="w-1/2" />
            </div>
          </section>

          <section id="testplan" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Test Plan</h2>
            <p>
              Our evaluation splits 80% of the dataset for training and 20% for testing.
              Future work includes exploring models that incorporate sequence structure
              more deeply.
            </p>
          </section>

          <section id="links" className="scroll-mt-27">
            <h2 className="text-3xl font-semibold mt-12">Project Links</h2>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=GRjRmayWeyo" className="text-blue-500">Final Video</a></li>
              <li><a href="https://colab.research.google.com/drive/13i5jrVx0f_AFSONIkNkGbxOgZwippBAg?usp=sharing" className="text-blue-500">Google Colab</a></li>
              <li><a href="https://github.com/Jkwokhk/SteamReviewAnalysis" className="text-blue-500">Github Repo</a></li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
