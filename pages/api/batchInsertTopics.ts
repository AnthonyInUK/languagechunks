import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { topics } = req.body;

    if (!Array.isArray(topics) || topics.length === 0) {
        return res.status(400).json({ error: "Please provide an array of topics." });
    }

    try {
        const { data, error } = await supabase
            .from('topics')
            .insert(topics, { count: 'exact' });

        if (error) {
            throw error;
        }

        res.status(200).json({ message: `${topics.length} topics were created.` });
    } catch (error) {
        res.status(500).json({ error: "Error during batch insert" });
    }
}
