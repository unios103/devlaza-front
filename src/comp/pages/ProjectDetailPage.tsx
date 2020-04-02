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
	
	title: string,
	description: string,
	owner: string,
	tags: string[],
	participant: string[],

	is_loaded: boolean

}

// うっうっ…(use of any)
class ProjectDetailPage extends React.Component<any, ProjectDetailPageState> {
	
	componentWillMount() {
		// TODO: ここでAPIをぶっ叩く
		this.setState({
			title: this.props.match.params.uuid + "というUUIDを持つプロジェクト",
			description: "バックのつよつよムーブが完了するとここがプロジェクトに基づいたものになります",
			owner: "ichiyo",
			tags: ["1", "2", "3", "4", "5"],
			participant: ["haracho", "meme", "birb"],
			is_loaded: true
		});

		this.setState({
			title: "【React】Webサービス フロンドエンド"
		});

	}

	render() {

		if(!this.state.is_loaded) {
			return (
				<Loading />
			)
		}

		return (
			<>
				<div className="pdetail-title-wrapper">
					<div className="pdetail-title">
						{this.state.title}
					</div>
				</div>
				<div className="pdetail-content">
					<div className="pdetail-description">
						{this.state.description}
					</div>
					<div className="pdetail-property-wrapper">
						<div className="pdetail-title-join">
							<h3>参加を申し込む</h3>
							<MaterialUI.Button variant="contained" size="large" color="primary" startIcon={<Icons.PostAdd/>}>
								参加申込
							</MaterialUI.Button>
							<h3>オーナー</h3>
							<Avater uuid={this.state.owner} />
							<h3>タグ</h3>
							{this.state.tags.map((tag) => (
								<ProjectTag tag_id={tag} />
							))}
							<h3>参加者</h3>
							{this.state.participant.map((people) => (
								<Avater uuid={people} hiddenName/>
							))}
						</div>
					</div>
				</div>
			</>
		)
	}

}

export default ProjectDetailPage;
