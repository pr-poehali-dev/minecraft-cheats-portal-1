'''
Business: API для получения уведомлений о новых обновлениях читов
Args: event - dict с httpMethod, queryStringParameters
      context - object с атрибутами request_id, function_name
Returns: HTTP response dict с JSON списком обновлений
'''

import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    dsn = os.environ.get('DATABASE_URL')
    
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration missing'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(dsn)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    query = '''
        SELECT 
            id,
            cheat_name,
            version,
            title,
            description,
            release_date,
            is_critical
        FROM cheat_updates 
        ORDER BY release_date DESC 
        LIMIT 10
    '''
    
    cur.execute(query)
    updates = cur.fetchall()
    
    cur.close()
    conn.close()
    
    updates_list = []
    for update in updates:
        updates_list.append({
            'id': update['id'],
            'cheatName': update['cheat_name'],
            'version': update['version'],
            'title': update['title'],
            'description': update['description'],
            'releaseDate': update['release_date'].isoformat() if update['release_date'] else None,
            'isCritical': update['is_critical']
        })
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'updates': updates_list,
            'count': len(updates_list)
        }),
        'isBase64Encoded': False
    }
