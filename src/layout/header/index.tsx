import { Breadcrumb } from 'antd';

export default function Header() {
    return (
        <Breadcrumb
            style={{ height: '80px', backgroundColor: '#fff' }}
            items={[
                {
                    title: 'Home',
                },
                {
                    title: 'List',
                },
                {
                    title: 'App',
                },
            ]}
        />
    );
}
