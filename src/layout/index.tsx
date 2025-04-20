import Header from './header';
import Menu from './menu';
import Content from './content';
import { Layout } from 'antd';
export default function layout() {
    return (
        <Layout>
            <Layout.Sider>
                <Menu />
            </Layout.Sider>
            <Layout>
                <Header />
                <Layout.Content>
                    <Content />
                </Layout.Content>
            </Layout>
        </Layout>
    );
}
