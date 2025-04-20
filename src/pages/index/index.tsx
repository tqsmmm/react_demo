import React from 'react';
import { Layout, Typography, Card, List, Space } from 'antd'; // 引入 Ant Design 组件
import './index.css'; // 引入样式文件

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const features = ['特点 1：易于使用的界面', '特点 2：高性能和可靠性', '特点 3：安全且可扩展'];

const MainPage: React.FC = () => {
    return (
        // 使用 Layout 包裹，可以方便地添加 Header, Footer, Sider 等
        <Layout className="main-page-layout">
            <Content className="main-page-content">
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Card>
                        <Title level={2}>欢迎使用我们的应用程序</Title>
                        <Paragraph>
                            这是应用程序的主界面。在这里，您可以了解我们提供的功能和特点。
                        </Paragraph>
                    </Card>

                    <Card title={<Title level={3}>功能特点</Title>}>
                        <List
                            dataSource={features}
                            renderItem={item => (
                                <List.Item>
                                    <Text>{item}</Text>
                                </List.Item>
                            )}
                            bordered // 添加边框
                        />
                    </Card>

                    <Card title={<Title level={3}>关于我们</Title>}>
                        <Paragraph>
                            我们的应用程序旨在帮助您高效地实现目标。我们致力于提供最佳的用户体验。
                        </Paragraph>
                    </Card>
                </Space>
            </Content>
        </Layout>
    );
};

export default MainPage;
