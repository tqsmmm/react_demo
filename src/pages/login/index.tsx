import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './index.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username/E-mail:', email);
        console.log('Password:', password);

        // Simulate login logic for username or email
        if (email.includes('@')) {
            console.log('Logging in with email...');
        } else {
            console.log('Logging in with username...');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">登录</h2>
                <div className="form-item">
                    <label htmlFor="email">用户名/E-mail:</label>
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="login-input"
                        placeholder="请输入用户名或 E-Mail"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">密码:</label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="login-input"
                        placeholder="请输入密码"
                        required
                    />
                </div>
                <Button type="primary" htmlType="submit" className="login-button">
                    登录
                </Button>
            </form>
        </div>
    );
};

export default Login;
