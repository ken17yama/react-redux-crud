import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field label='Title' name="title" type="text" component={this.renderField} />
          <Field label='Body' name="body" type="text" component={this.renderField} />
          <input type="submit" value="submit" disabled={pristine || submitting} />
          <Link to='/'>Cansel</Link>
        </form>
      </React.Fragment >
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Titleを入力してください。"
  if (!values.body) errors.body = "Bodyを入力してください。"

  return errors;
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
