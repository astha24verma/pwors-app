// useSessionUserId.js

import { useEffect, useState } from 'react';

const useSessionUserId = () => {
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');
        if (userIdFromStorage) {
            setUserId(userIdFromStorage);
        }
        setLoading(false);
    }, []);

    return { userId, loading };
};

export default useSessionUserId;
