-- Allow public read on all 3 content tables

CREATE POLICY "allow anon read" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "allow anon read" ON public.carousel_images
  FOR SELECT USING (true);
