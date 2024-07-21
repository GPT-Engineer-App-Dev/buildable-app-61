import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GirlProfile = () => {
  return (
    <Card className="w-[300px] mx-auto">
      <CardHeader className="flex items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://example.com/girl-avatar.jpg" alt="Girl's avatar" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold text-center mb-2">Sarah Johnson</h2>
        <p className="text-center text-gray-600 mb-4">16 years old</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Student</Badge>
          <Badge variant="secondary">Artist</Badge>
          <Badge variant="outline">Volleyball Player</Badge>
        </div>
        <p className="mt-4 text-center">
          Hi! I'm Sarah. I love art, playing volleyball, and hanging out with my friends.
        </p>
      </CardContent>
    </Card>
  );
};

export default GirlProfile;