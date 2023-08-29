import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Song } from "@/types/types";
import { cookies } from "next/headers";


const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongs;