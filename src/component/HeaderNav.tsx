import React from 'react';

const HeaderNav = () => {
    return (
        <header style={{ display: "flex", justifyContent: "center"}}>
            <table>
                <thead>
                    <tr>
                        <th>profile</th>
                        <th>project</th>
                        <th>tech</th>
                        <th>study</th>
                    </tr>
                </thead>
            </table>
        </header>
    );
};

export default HeaderNav;
