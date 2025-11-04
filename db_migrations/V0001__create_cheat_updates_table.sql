CREATE TABLE IF NOT EXISTS cheat_updates (
    id SERIAL PRIMARY KEY,
    cheat_name VARCHAR(100) NOT NULL,
    version VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    release_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_critical BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_cheat_updates_release_date ON cheat_updates(release_date DESC);

INSERT INTO cheat_updates (cheat_name, version, title, description, is_critical) VALUES
('KillAura', '2.1.5', 'Улучшенная точность атаки', 'Повышена точность атаки в PvP режиме. Исправлены ложные срабатывания на дружественных мобов.', false),
('Fly', '3.0.3', 'Обход Verus античита', 'Добавлен новый режим обхода для серверов с Verus античитом. Улучшена стабильность на высоких скоростях.', true),
('XRay', '1.8.2', 'Оптимизация производительности', 'Снижено потребление ресурсов на 40%. Добавлены новые фильтры для Minecraft 1.21.', false);