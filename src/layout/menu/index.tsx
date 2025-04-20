import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';

export default function menu() {
    const navigate = useNavigate();
    const handleClick: MenuProps['onClick'] = e => {
        navigate(e.key);
    };

    const items: MenuProps['items'] = [
        {
            label: '首页',
            key: '/',
            icon: <AppstoreOutlined />,
        },
        {
            label: '登录',
            key: '/login',
            icon: <AppstoreOutlined />,
        },
    ];
    return <Menu onClick={handleClick} style={{ height: '100vh' }} items={items} />;
}
