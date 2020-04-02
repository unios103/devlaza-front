import * as React from "react"
import styled from "styled-components"
import "./ProjectDetailPage.css"

import * as MaterialUI from "@material-ui/core"

import * as Icons from "@material-ui/icons"
import Loading from "../Loading"
import Avater from "../Avater"
import ProjectTag from "../ProjectTag"

/* --- ボタンのスタイル --- */

type ProjectDetailPageState = {
	
	name: string,
	created_at: string,
	created_user: string,
	recruiting: boolean,
	introduction: string,
	
	sites: string[][],
	tags: string[],
	member: string[],

	favs: number,

	is_loaded: boolean

}

// うっうっ…(use of any)
class ProjectDetailPage extends React.Component<any, ProjectDetailPageState> {
	
	constructor(props: any){
		super(props);
		this.state = {
			name: "",
			created_at: "",
			created_user: "",
			recruiting: true,
			introduction: "",
			sites: [[]],
			tags: [],
			member: [],
			favs: 0,
			is_loaded: false
		}
	}

	componentDidMount() {
		// TODO: ここでAPIをぶっ叩く
		this.setState({
			name: this.props.match.params.uuid + "というUUIDを持つプロジェクト",
			created_at: "2020/04/02",
			created_user: "ichiyo",
			introduction: "バックのつよつよムーブが完了するとここがプロジェクトに基づいたものになります",
			sites: [["GitHub", "https://github.com/"], ["Twitter", "https://twitter.com/"]],
			tags: ["1", "2", "3", "4", "5"],
			member: ["haracho", "meme", "birb"],
			favs: 100,
			recruiting: true,
			is_loaded: true
		});

		this.setState({
			name: "【React】Webサービス フロンドエンド"
		});

	}

	render() {

		if(!this.state.is_loaded) {
			return (
				<Loading />
			)
		}

		var joinButton = (
			<MaterialUI.Button variant="contained" size="large" disabled startIcon={<Icons.PostAdd/>}>
        未募集
			</MaterialUI.Button>
		)

		if(this.state.recruiting){
			joinButton = (
				<MaterialUI.Button variant="contained" size="large" color="primary" startIcon={<Icons.PostAdd/>}>
					参加申込
				</MaterialUI.Button>
			)
		}

		return (
			<>
				<div className="pdetail-name-wrapper">
					<div className="pdetail-name">
						{this.state.name}
					</div>
				</div>
				<div className="pdetail-content">
					<div className="pdetail-introduction">
						<div className="pdetail-property">
							{this.state.created_at} 作成
							<MaterialUI.Icon 
								style={{
									marginLeft: "1em",
									fontSize: "90%",
									verticalAlign: "middle"
								}}
							>favorite</MaterialUI.Icon>
							{this.state.favs}
						</div>
						{this.state.introduction}
					</div>
					<div className="pdetail-property-wrapper">
						<div className="pdetail-name-join">
							<h3>参加を申し込む</h3>
							{joinButton}

							<h3>プロジェクト作成者</h3>
							<Avater uuid={this.state.created_user} />

							<h3>タグ</h3>
							{this.state.tags.map((tag) => (
								<ProjectTag tag_id={tag} />
							))}

							<h3>参加者</h3>
							{this.state.member.map((people) => (
								<Avater uuid={people} hiddenName/>
							))}

							<h3>関連サイト</h3>
							{this.state.sites.map((site) => (
								<div>
									<div className="pdetail-site-title">
										{site[0]}
									</div>
									<div className="pdetail-site-url">
										<a href={site[1]}>{site[1]}</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}

}

export default ProjectDetailPage;
