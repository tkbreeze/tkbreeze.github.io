import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import GitHubIcon from "../components/GitHubIcon"
import "../styles/index.css"
import { Link } from "gatsby"

const ProjectItem = ({ children }) => (
  <div className="flex items-center flex-row mb-4 gap-4">
    {children}
  </div>
)

const IndexPage = () => {
  return (
    <main className="bg-sky-50 p-5">
      <div className="border border-blue-500 p-2 inline-block text-4xl mb-2">
        <Link to="/">
          <span className="text-blue-500 font-bold">Takuto Fukushima</span>
          <span className="mx-2 text-blue-500">|</span>
          <span className="text-blue-500 font-bold">福島 拓斗</span>
        </Link>
      </div>
      <div className="container mb-2">
        明治大学大学院 理工学研究科 情報科学専攻 博士前期課程1年 <GitHubIcon url="https://github.com/tkbreeze" />
      </div>
      <div className="container mb-2">
        <h1 className="text-4xl font-bold">Publications</h1>
        <ul className="list-disc pl-5 mt-1">
          <li>
              Takuto Fukushima, and Ryusuke Miyamoto, "Spatiotemporal Pooling on Appropriate Topological Maps Represented as Two-Dimensional Images for EEG Classification.", Asian Conference on Computer Vision (ACCV) poster, 2024, DOI:<a href="https://doi.org/10.1007/978-981-96-0901-7_4" className="text-blue-600 visited:text-purple-600">https://doi.org/10.1007/978-981-96-0901-7_4</a> (<span className="font-bold">acceptance rate: 32%</span>)
          </li>
        </ul>
      </div>
      <div className="container mb-2">
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <ul className="list-disc pl-5 mt-1">
          <li>
            Alleeks株式会社, Frontend & Backend Engineer, 2022/01 - 2023/05
          </li>
          <li>
            株式会社スピック, 社内SE, 2023/05 - Current
          </li>
          <li>
            日本電信電話株式会社, R&Dインターン, 2024/07 - 2024/08(1ヶ月間)
          </li>
          <li>
            明治大学, TA, 2024/04 - Current
          </li>
        </ul>
      </div>
      <div className="container mb-2">
        <h1 className="text-4xl font-bold mb-1">Projects</h1>
        <ProjectItem>
          <div className="basis-1/4">
            <StaticImage src="../images/game.png" alt="game" />
          </div>
          <div className="basis-3/4">
            <div className="projectTitle">Ice Planet Mission (ゲーム開発)</div>
            <div>
              制作時期: 2022年<br />
              Unityを使用して、障害物避けアクションゲームを個人開発しました。全10ステージで構成される本作は、各ステージをクリアしながら最終面を目指す構造となっています。
              ステージ内に配置されたコインを集めることでスコアが加算され、ハイスコアへの挑戦も楽しめる要素を実装しました。また、プレイヤーの快適なゲーム体験を重視し、直感的に操作できるUIデザインを心がけました。<br />
              Link: <a href="https://sharemygame.com/@tkbreeze/ice-planet-mission" className="text-blue-600 visited:text-purple-600">https://sharemygame.com/@tkbreeze/ice-planet-mission</a>
            </div>
          </div>
        </ProjectItem>
        <ProjectItem>
          <div className="basis-3/5">
            <div className="projectTitle">ゲームレビュー投稿サイト</div>
            <div>
              制作時期: 2023年<br />
              ゲームレビュー投稿サイトを個人開発しました。フレームワークはRuby on Railsを用いており、インフラとしてはAWS EC2サーバーを使用しています。ユーザーがゲームのレビューを投稿し、他のユーザーと共有することができるサイトです。本サイトの特長は、単なる総合評価点だけでなく、ゲーム性、グラフィック、世界観などの5つの核となる要素について、それぞれの長所・短所を詳細に評価できるシステムを実装したことです。これにより、ユーザーは自身の嗜好や価値観に基づいてゲームを選択することができ、真に自分に適したゲームとの出会いを実現できると考えています。<br />
              Link: <a href="https://game-review-aggregator.net/" className="text-blue-600 visited:text-purple-600">https://game-review-aggregator.net/</a> GitHub: <GitHubIcon url="https://github.com/tkbreeze/game_review" />
            </div>
          </div>
          <div className="basis-2/5">
            <StaticImage src="../images/game_review.png" alt="game_review" />
          </div>
        </ProjectItem>
        <ProjectItem>
          <div className="basis-1/5">
            <StaticImage src="../images/amazon_connect.png" alt="amazon_connect" />
          </div>
          <div className="basis-4/5">
            <div className="projectTitle">Amazon Connectブログ作成</div>
            <div>
              制作時期: 2023年<br />
              Alleeks株式会社での長期インターンシップ中に、インターンシップの業務で使用していたAmazon Connectに関する技術情報をまとめたブログを二名で作成しました。プロジェクトリーダーとして、タスクの管理やスケジューリングなども担当しました。フロントエンドではVue.jsを使用し、バックエンドではNode.jsとPrismaを活用してAPIを構築しました。また、マークダウン形式での投稿機能を実装し、ブログ記事を簡単に作成できるようにしました。<br />
              Link: <a href="https://www.alleeks.com/acblog" className="text-blue-600 visited:text-purple-600">https://www.alleeks.com/acblog</a>
            </div>
          </div>
        </ProjectItem>
        <ProjectItem>
          <div className="basis-3/4">
            <div className="projectTitle">Motor Imagery Classification(運動想起分類)の精度向上</div>
            <div>
              時期: 2023年 - Current<br />
              Motor Imagery Classification(運動想起分類)とは、特定の動作を頭の中でイメージした際に記録された脳波データを基に、どの動作をイメージしていたかを分類するタスクになっています。車椅子の制御や、義手の制御、VRへの応用など、様々な応用が期待されています。<br />
              従来の手法では脳波の空間的・時間的特徴量を十分に活用できていないという課題がありました。そのため、本研究ではコンピュータビジョン分野の技術を応用することで、それらの特徴を最大限に捉え、「PhysioNet EEG Motor Movement/Imagery Dataset」というオープンデータセットにおいて既存の手法を上回る精度を達成しました。本研究はACCV2024のポスターに採択されました。現在は、その過程で見つけた課題を解決することで、さらなる精度向上を目指しています。<br />
              また、日本電信電話株式会社のR&Dインターンシップでは、脳波計を用いたオンライン学習において学習方法の工夫を行いました。<br />
              Link: <a href="https://doi.org/10.1007/978-981-96-0901-7_4" className="text-blue-600 visited:text-purple-600">https://doi.org/10.1007/978-981-96-0901-7_4</a> <br />
            </div>
          </div>
          <div className="basis-1/4">
            <StaticImage src="../images/poster_a4.png" alt="poster" />
          </div>
        </ProjectItem>
        <ProjectItem>
          <div className="basis-1/4">
            <StaticImage src="../images/spic.webp" alt="spic" />
          </div>
          <div className="basis-3/4">
            <div className="projectTitle">株式会社スピック 社内システム開発</div>
            <div>
              時期: 2023年 - Current<br />
              株式会社スピックの社内システム開発を行っています。
            </div>
          </div>
        </ProjectItem>
      </div>
    </main>
  )
}

export default IndexPage