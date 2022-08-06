function RandomSad()
{
  const sad_words = ['betrayal', 'regret', 'abandonment', 'lies', 'diceat', 'unacommplished', 'grief-stricken', 'distraught', 'forsaken', 'hate', 'sad', '😭', '😢', '😥', '🤷‍♂️', '🤦‍♂️'];

  let i = Math.round(Math.random() * sad_words.length);

  return sad_words[i];
}