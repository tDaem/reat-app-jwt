import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Modal, Checkbox, Form, Input, Alert } from 'antd';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  loading: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

const LoginModal = (props: ILoginModalProps) => {


  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const [form] = Form.useForm();

  const { loginError, loading, handleClose } = props;

  const handleLoginSubmit = (e) => {
    form.validateFields()
      .then(value => login(value));
  };

  return (
    <Modal
      open={props.showModal}
      onCancel={handleClose}
      destroyOnClose={true}
      maskClosable={false}
      title={<Translate contentKey={'login.title'}>Sign in</Translate>}
      okText={<Translate contentKey={'login.title'}>Sign in</Translate>}
      cancelText={<Translate contentKey={'entity.action.cancel'}>Cancel</Translate>}
      onOk={handleLoginSubmit}
      confirmLoading={loading}
    >
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ rememberMe: false }}
        autoComplete='off'
        layout='vertical'
        form={form}
        preserve={false}
      >
        {
          loginError && !loading
            ? (<Alert style={{ marginBottom: '16px' }} message={translate('login.messages.error.authentication')}
                      type='warning' />)
            : null
        }
        <Form.Item
          label={translate('global.form.username.label')}
          name='username'
          rules={[{ required: true, message: '账号不能为空！' }]}
        >
          <Input
            placeholder={translate('global.form.username.placeholder')}
          />
        </Form.Item>
        <Form.Item
          label={translate('login.form.password')}
          name='password'
          rules={[{ required: true, message: '密码不能为空！' }]}
        >
          <Input
            type='password'
            placeholder={translate('login.form.password.placeholder')}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='rememberMe' valuePropName='checked' noStyle>
            <Checkbox><Translate contentKey={'login.form.rememberme'}>Remember me</Translate></Checkbox>
          </Form.Item>

          {/*<a className='login-form-forgot' href=''>
            Forgot password?
          </ a>*/}
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default LoginModal;
