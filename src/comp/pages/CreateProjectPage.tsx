import * as React from "react";
import * as styles from "css/comp/pages/CreateProjectPage.module.css";
import * as CommonStyles from "css/comp/Common.module.css";
import { TextField, Button } from "@material-ui/core";

type CreateProjectPageProps = {};
type CreateProjectPageState = {
  name: string;
  introduction: string;
  isNameError: boolean;
  isIntroductionError: boolean;
};

class CreateProjectPage extends React.Component<
  CreateProjectPageProps,
  CreateProjectPageState
> {
  constructor(props: CreateProjectPageProps) {
    super(props);
    this.state = {
      name: "",
      introduction: "",
      isNameError: false,
      isIntroductionError: false,
    };
  }

  handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
      isNameError: e.target.value.length === 0,
    });
  };

  handleIntroductionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      introduction: e.target.value,
      isIntroductionError: e.target.value.length === 0,
    });
  };

  render() {
    return (
      <>
        <div
          className={CommonStyles.content_title}
          style={{ marginBottom: "1rem" }}
        >
          プロジェクトを作成する
        </div>
        <div className={styles.form_wrapper}>
          <form autoComplete="off">
            <TextField
              id="project-name"
              label="名前"
              margin="normal"
              multiline
              variant="outlined"
              fullWidth
              required
              onChange={this.handleNameInputChange}
              error={this.state.isNameError}
            />
            <TextField
              id="project-intro"
              label="プロジェクトの説明"
              margin="normal"
              fullWidth
              required
              onChange={this.handleIntroductionInputChange}
              error={this.state.isIntroductionError}
              multiline
              rows={4}
              variant="outlined"
            />
            <Button variant="contained" color="secondary" size="large">
              作成
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default CreateProjectPage;
