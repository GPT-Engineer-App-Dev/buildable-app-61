import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FrejaProfile = () => {
  return (
    <Card className="w-[300px] mx-auto bg-gradient-to-b from-blue-100 to-purple-100">
      <CardHeader className="flex items-center">
        <Avatar className="w-24 h-24 ring-2 ring-purple-300">
          <AvatarImage src="https://example.com/freja-avatar.jpg" alt="Freja's avatar" />
          <AvatarFallback>FR</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-2 text-purple-800">Freja</h2>
        <p className="text-center text-gray-600 mb-4">14 years old</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge className="bg-blue-500">Nordic Mythology</Badge>
          <Badge variant="secondary" className="bg-purple-300 text-purple-800">Nature Lover</Badge>
          <Badge variant="outline" className="text-green-700 border-green-700">Eco Warrior</Badge>
        </div>
        <p className="text-center text-gray-700">
          Hej! I'm Freja, named after the Norse goddess of love and beauty. I'm passionate about preserving our planet and exploring the wonders of nature.
        </p>
      </CardContent>
    </Card>
  );
};

export default FrejaProfile;