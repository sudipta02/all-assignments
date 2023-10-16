CREATE OR REPLACE VIEW "public"."mad_feed_post_vote_sums" AS 
  SELECT mad_feed_posts.post_id,
    mad_feed_posts.author AS user_id,
    COALESCE(( SELECT sum(mad_feed_votes_1.value) AS sum
        FROM auth.mad_feed_votes mad_feed_votes_1
        WHERE ((mad_feed_posts.post_id = mad_feed_votes_1.post_id) AND (mad_feed_votes_1.type = 'VOTE'::text))
        GROUP BY mad_feed_posts.post_id), (0)::numeric) AS votes,
    COALESCE(( SELECT sum(mad_feed_votes_1.ranking) AS sum
        FROM auth.mad_feed_votes mad_feed_votes_1
        WHERE ((mad_feed_posts.post_id = mad_feed_votes_1.post_id) AND (mad_feed_votes_1.type = 'VOTE'::text))
        GROUP BY mad_feed_posts.post_id), (0)::numeric) AS ranking,
    COALESCE((( SELECT count(mad_feed_votes_1.value) AS count
        FROM auth.mad_feed_votes mad_feed_votes_1
        WHERE ((mad_feed_posts.post_id = mad_feed_votes_1.post_id) AND (mad_feed_votes_1.type = 'VOTE'::text))
        GROUP BY mad_feed_posts.post_id))::numeric, (0)::numeric) AS votes_count,
     COALESCE((( SELECT sum(mad_feed_posts1.value) AS sum
        FROM auth.mad_feed_posts mad_feed_posts1
        WHERE mad_feed_posts.post_id = mad_feed_posts1.parent_post_id
        GROUP BY mad_feed_posts1.parent_post_id))::numeric, (0)::numeric) AS comments_value,
    COALESCE((( SELECT count(mad_feed_posts1.post_id) AS count
        FROM auth.mad_feed_posts mad_feed_posts1
        WHERE mad_feed_posts.post_id = mad_feed_posts1.parent_post_id
        GROUP BY mad_feed_posts1.parent_post_id))::numeric, (0)::numeric) AS comments_count,
    COALESCE(( SELECT sum(mad_feed_votes_1.ranking) AS sum
        FROM auth.mad_feed_votes mad_feed_votes_1
        WHERE (
            (mad_feed_posts.post_id = mad_feed_votes_1.post_id) 
            AND (mad_feed_votes_1.type = 'VOTE'::text)
            AND ( mad_feed_votes_1.timestamp > NOW() - INTERVAL '1 days')
        )
        GROUP BY mad_feed_posts.post_id), (0)::numeric) AS trending_ranking,
    COALESCE(( SELECT count(mad_feed_votes_1.value) AS count
        FROM auth.mad_feed_votes mad_feed_votes_1
        WHERE (
            (mad_feed_posts.post_id = mad_feed_votes_1.post_id) 
            AND (mad_feed_votes_1.type = 'VOTE'::text)
            AND ( mad_feed_votes_1.timestamp > NOW() - INTERVAL '1 days')
        )
        GROUP BY mad_feed_posts.post_id), (0)::numeric) AS trending_count
    FROM (auth.mad_feed_posts
        LEFT JOIN auth.mad_feed_votes ON ((mad_feed_posts.post_id = mad_feed_votes.post_id)))
    GROUP BY mad_feed_posts.post_id, mad_feed_votes.post_id;
